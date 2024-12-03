import { ColorPicker, Form, Input, Slider } from "antd"
import { usePage, usePageDispatch } from "@/app/PageContext"

type FieldType = {
  hotWord?: string
  boxHeight?: boolean
  bgColor?: string
}

const SearchCom = () => {
  const page = usePage()
  const dispatch = usePageDispatch()
  const comData = page.componentList.filter((com) => {
    return com.id === page.activeComponent
  })[0].data

  const onValuesChange = (changedValues, allValues) => {
    let bgColor = ""
    if (changedValues.bgColor) {
      const value = changedValues.bgColor.metaColor
      bgColor = `rgba(${value.r},${value.g},${value.b},${value.a})`
    }
    let componentList = page.componentList
    const updatedData = componentList.map((com) =>
      com.id === page.activeComponent
        ? {
            ...com,
            data: {
              ...allValues,
              bgColor: bgColor ? bgColor : allValues.bgColor,
            },
          }
        : com
    )
    let newValue = {
      ...page,
      componentList: updatedData,
    }
    dispatch({
      type: "changed",
      page: newValue,
    })
  }

  return (
    <section>
      <h1 className="py-6 mb-6 text-2xl font-bold border-b border-slate-200">
        商品搜索
      </h1>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        initialValues={comData}
        autoComplete="off"
        onValuesChange={onValuesChange}
      >
        <Form.Item<FieldType> label="添加热词" name="hotWord">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="框体高度" name="boxHeight">
          <Slider min={32} max={48} />
        </Form.Item>

        <Form.Item<FieldType> name="bgColor" label="背景颜色">
          <ColorPicker format="rgb" value={comData.bgColor} size="small" />
        </Form.Item>
      </Form>
    </section>
  )
}

export default SearchCom

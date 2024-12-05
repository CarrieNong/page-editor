import { Form, Radio } from "antd"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { useEffect } from "react"

type FieldType = {
  mode?: string
}

const modeList = [
  {
    name: "一行两个",
    mode: "two",
  },
  {
    name: "一行三个",
    mode: "three",
  },
  {
    name: "详细列表",
    mode: "list",
  },
  {
    name: "横向滑动",
    mode: "scroll",
  },
]

const ProductCom = () => {
  const [form] = Form.useForm()
  const page = usePage()
  const dispatch = usePageDispatch()
  const comData = page.componentList.filter((com) => {
    return com.id === page.activeComponent
  })[0].data

  useEffect(() => {
    form.setFieldsValue(comData) // 动态更新表单的值
  }, [comData, form])

  const onValuesChange = (changedValues, allValues) => {
    let componentList = page.componentList
    const updatedData = componentList.map((com) =>
      com.id === page.activeComponent
        ? {
            ...com,
            data: {
              ...allValues,
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
        商品
      </h1>
      <Form
        form={form}
        wrapperCol={{ span: 16 }}
        autoComplete="off"
        onValuesChange={onValuesChange}
      >
        <Form.Item<FieldType> label="选择模式" name="mode">
          <Radio.Group value={comData.mode}>
            {modeList.map((item) => (
              <Radio className="mb-3" value={item.mode}>
                {item.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
    </section>
  )
}

export default ProductCom

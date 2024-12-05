import { Form, Input } from "antd"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { useEffect } from "react"

type FieldType = {
  title?: string
  url?: string
  desc?: string
}

const TitleCom = () => {
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
            data: allValues,
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
        标题文字
      </h1>
      <Form
        name="basic"
        wrapperCol={{ span: 16 }}
        form={form}
        autoComplete="off"
        onValuesChange={onValuesChange}
      >
        <Form.Item<FieldType>
          label="标题文字"
          name="title"
          rules={[{ required: true, message: "请输入标题文字" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="描述内容" name="desc">
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="跳转链接" name="url">
          <Input />
        </Form.Item>
      </Form>
    </section>
  )
}

export default TitleCom

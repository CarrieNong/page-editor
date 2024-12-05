import { Form, Input, Button, Card } from "antd"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { useEffect } from "react"

const TabCom = () => {
  const [form] = Form.useForm()
  const page = usePage()
  const dispatch = usePageDispatch()
  const comData =
    page.componentList.find((com) => com.id === page.activeComponent)?.data ||
    {}

  useEffect(() => {
    // 初始化表单值
    form.setFieldsValue({ navData: comData?.navData || [] })
  }, [comData, form])

  const addNav = () => {
    const navData = form.getFieldValue("navData") || []
    const newNavData = [
      ...navData,
      {
        title: `导航${navData.length + 1}`,
        icon: comData.initialData[navData.length].icon,
      },
    ]
    form.setFieldsValue({ navData: newNavData })

    // 同步到 context
    syncData(newNavData)
  }

  const syncData = (updatedNavData) => {
    const updatedComponentList = page.componentList.map((com) =>
      com.id === page.activeComponent
        ? { ...com, data: { ...com.data, navData: updatedNavData } }
        : com
    )
    dispatch({
      type: "changed",
      page: { ...page, componentList: updatedComponentList },
    })
  }

  const handleValuesChange = (changedValues, allValues) => {
    // 同步修改后的数据
    syncData(allValues.navData)
  }

  if (!comData.navData) {
    return <div>暂无数据</div>
  }

  return (
    <section>
      <h1 className="py-6 mb-6 text-2xl font-bold border-b border-slate-200">
        底部导航
      </h1>
      <Form
        form={form}
        wrapperCol={{ span: 16 }}
        initialValues={comData}
        autoComplete="off"
        onValuesChange={handleValuesChange}
      >
        {comData.navData.length < 4 && (
          <Button type="primary" className="mb-2" onClick={addNav}>
            添加导航
          </Button>
        )}
        <Form.List name="navData">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => (
                <Card
                  key={field.key}
                  style={{ width: 300, marginBottom: 16 }}
                  title={`导航${index + 1}`}
                  extra={
                    <Button
                      type="link"
                      danger
                      onClick={() => remove(field.name)}
                    >
                      删除
                    </Button>
                  }
                >
                  <Form.Item
                    {...field}
                    name={[field.name, "title"]}
                    label="导航名称"
                    rules={[{ required: true, message: "请输入导航名称" }]}
                  >
                    <Input placeholder="请输入导航名称" />
                  </Form.Item>
                </Card>
              ))}
            </>
          )}
        </Form.List>
      </Form>
    </section>
  )
}

export default TabCom

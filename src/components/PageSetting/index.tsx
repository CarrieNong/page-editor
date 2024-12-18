import { ColorPicker, Checkbox, Form, Input, Radio } from "antd"
import { usePage, usePageDispatch } from "@/app/PageContext"

type FieldType = {
  title?: string
  isBack?: boolean
  isDefaultColor?: string
}

const PageSetting = () => {
  const page = usePage()
  const dispatch = usePageDispatch()

  const onValuesChange = (changedValues, allValues) => {
    let newValue = {
      ...page,
      pageSetting: {
        ...page.pageSetting,
        ...allValues,
      },
    }
    dispatch({
      type: "changed",
      page: newValue,
    })
  }

  const changeColor = (value, css) => {
    let changeColor = css
    let newValue = {
      ...page,
      pageSetting: {
        ...page.pageSetting,
        bgColor: changeColor,
      },
    }
    dispatch({
      type: "changed",
      page: newValue,
    })
  }

  return (
    <Form
      name="basic"
      layout="vertical"
      wrapperCol={{ span: 16 }}
      initialValues={page.pageSetting}
      autoComplete="off"
      onValuesChange={onValuesChange}
    >
      <Form.Item<FieldType>
        label="页面名称"
        name="title"
        rules={[{ required: true, message: "请输入页面名称" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="返回按钮显示"
        name="isBack"
        valuePropName="checked"
      >
        <Checkbox>显示</Checkbox>
      </Form.Item>

      <Form.Item name="isDefaultColor" label="背景颜色">
        <Radio.Group>
          <Radio value="1">默认颜色</Radio>
          <Radio value="2">自定义颜色</Radio>
          {page.pageSetting.isDefaultColor == "2" && (
            <ColorPicker
              value={page.pageSetting.bgColor}
              size="small"
              onChange={(value, css) => {
                changeColor(value, css)
              }}
            />
          )}
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}

export default PageSetting

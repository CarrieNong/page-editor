import { ColorPicker, Checkbox, Form, Input, Radio } from "antd"
import { SetStateAction, useState } from "react"

type FieldType = {
  title?: string
  isBack?: boolean
  isDefaultColor?: string
}

const initialValues = {
  title: "页面标题",
  isBack: true,
  isDefaultColor: "1",
}

const PageSetting = () => {
  const [color, setColor] = useState("#f7f8fa")
  const [isDefaultColor, setIsDefaultColor] = useState("1")

  const onValuesChange = (
    changedValues: {
      isDefaultColor: SetStateAction<string>
    },
    allValues
  ) => {
    console.log(allValues)
    if ("isDefaultColor" in changedValues) {
      setIsDefaultColor(changedValues.isDefaultColor)
    }
  }

  const changeColor = (value) => {
    setColor(value.metaColor.Color)
  }

  return (
    <Form
      name="basic"
      layout="vertical"
      wrapperCol={{ span: 16 }}
      initialValues={initialValues}
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
          {isDefaultColor == "2" && (
            <ColorPicker
              value={color}
              defaultValue="#1677ff"
              size="small"
              onChange={(value) => {
                changeColor(value)
              }}
            />
          )}
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}

export default PageSetting

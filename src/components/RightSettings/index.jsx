import { SnippetsOutlined, BarsOutlined, ToolOutlined } from "@ant-design/icons"
import { Flex, Button } from "antd"
const settingList = [
  {
    text: "页面设置",
    icon: <SnippetsOutlined />,
    name: "PageSetting",
  },
  {
    text: "组件管理",
    icon: <BarsOutlined />,
    name: "ComponentManagement",
  },
  {
    text: "组件设置",
    icon: <ToolOutlined />,
    name: "ComponentSetting",
  },
]

const RightSettings = () => {
  return (
    <section relative>
      <Flex vertical="true" gap="small" className="absolute top-5 -left-28">
        {settingList.map((setting) => (
          <Button key={setting.name} size="small" icon={setting.icon}>
            {setting.text}
          </Button>
        ))}
      </Flex>
    </section>
  )
}

export default RightSettings

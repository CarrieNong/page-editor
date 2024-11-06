import { SnippetsOutlined, BarsOutlined, ToolOutlined } from "@ant-design/icons"
import { Flex, Button } from "antd"
import PageSetting from "../PageSetting"
import ComponentManagement from "../ComponentManagement"
import ComponentSetting from "../ComponentSetting"
import { useState } from "react"
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

const settingComponents = {
  PageSetting,
  ComponentManagement,
  ComponentSetting,
}

const RightSettings = () => {
  const [activeSetting, setActiveSetting] = useState("PageSetting")

  const changeSetting = (name) => {
    setActiveSetting(name)
  }

  const ActiveComponent = settingComponents[activeSetting]
  return (
    <section relative>
      <Flex vertical="true" gap="small" className="absolute top-5 -left-28">
        {settingList.map((setting) => (
          <Button
            type={setting.name === activeSetting ? "primary" : "default"}
            key={setting.name}
            size="small"
            icon={setting.icon}
            onClick={() => {
              changeSetting(setting.name)
            }}
          >
            {setting.text}
          </Button>
        ))}
      </Flex>
      <section className="p-5">
        {ActiveComponent && <ActiveComponent />}
      </section>
    </section>
  )
}

export default RightSettings

import { Badge, TabBar } from "antd-mobile"
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons"

const tabs = [
  {
    key: "home",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
  },
  {
    key: "todo",
    title: "待办",
    icon: <UnorderedListOutline />,
    badge: "5",
  },
  {
    key: "message",
    title: "消息",
    icon: <MessageOutline />,
  },
  {
    key: "personalCenter",
    title: "我的",
    icon: <UserOutline />,
  },
]

const TabCom = () => {
  return (
    <section>
      <TabBar>
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </section>
  )
}

export default TabCom

import { TabBar } from "antd-mobile"
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons"

const iconMap = {
  AppOutline: <AppOutline />,
  UnorderedListOutline: <UnorderedListOutline />,
  MessageOutline: <MessageOutline />,
  UserOutline: <UserOutline />,
}

const TabCom = ({ data }) => {
  return (
    <section>
      <TabBar>
        {(data.navData.length ? data.navData : data.initialData).map(
          (item, index) => (
            <TabBar.Item
              key={index}
              icon={iconMap[item.icon]}
              title={item.title}
            />
          )
        )}
      </TabBar>
    </section>
  )
}

export default TabCom

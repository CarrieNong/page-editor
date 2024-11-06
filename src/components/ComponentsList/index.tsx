import {
  SearchOutlined,
  FontSizeOutlined,
  SendOutlined,
  ShoppingOutlined,
} from "@ant-design/icons"
import { Flex } from "antd"
import "./index.css"

const componentsList = [
  {
    text: "商品搜索",
    icon: <SearchOutlined style={{ fontSize: "32px" }} />,
    name: "GoodSearch",
  },
  {
    text: "标题文本",
    icon: <FontSizeOutlined style={{ fontSize: "32px" }} />,
    name: "TitleText",
  },
  {
    text: "底部导航",
    icon: <SendOutlined style={{ fontSize: "32px" }} />,
    name: "BottomNavigation",
  },
  {
    text: "商品",
    icon: <ShoppingOutlined style={{ fontSize: "32px" }} />,
    name: "GoodList",
  },
]

const ComponentsList = () => {
  const listItem = componentsList.map((good) => (
    <li
      key={good.name}
      className="component-item w-2/6 h-28 flex flex-col justify-center items-center"
    >
      {good.icon}
      <span className="text-slate-400 mt-2">{good.text}</span>
    </li>
  ))
  return (
    <div>
      <Flex wrap>{listItem}</Flex>
    </div>
  )
}

export default ComponentsList

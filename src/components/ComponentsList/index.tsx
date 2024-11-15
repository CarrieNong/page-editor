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
    name: "SearchCom",
    data: {
      comName: "SearchCom",
      hotWord: "搜索商品",
      wordPosition: "center",
      bgColor: "#fff",
    },
  },
  {
    text: "标题文本",
    icon: <FontSizeOutlined style={{ fontSize: "32px" }} />,
    name: "TitleCom",
    data: {
      comName: "TitleCom",
      title: "标题文本",
      desc: "描述内容描述内容描述内容描述内容",
      titleSize: 16,
      descSize: 12,
    },
  },
  {
    text: "底部导航",
    icon: <SendOutlined style={{ fontSize: "32px" }} />,
    name: "TabCom",
    data: {
      comName: "TabCom",
      chooseColor: "#1677ff",
      noChooseColor: "#fff",
      tabList: [
        {
          activeIcon: "",
          noActiveIcon: "",
          name: "",
          url: "",
        },
      ],
    },
  },
  {
    text: "商品",
    icon: <ShoppingOutlined style={{ fontSize: "32px" }} />,
    name: "ProductCom",
    data: {
      comName: "ProductCom",
      mode: "",
      themeColor: "#1677ff",
      productList: [
        {
          id: "",
          price: "",
          name: "",
          desc: "",
        },
      ],
    },
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

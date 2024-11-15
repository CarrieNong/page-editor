import {
  SearchOutlined,
  FontSizeOutlined,
  SendOutlined,
  ShoppingOutlined,
} from "@ant-design/icons"
import { Flex } from "antd"
import "./index.css"
import { useDraggable, DragOverlay } from "@dnd-kit/core"

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

const ComponentsList = ({ activeId }) => {
  const ListItem = (item) => {
    const { attributes, listeners, setNodeRef } = useDraggable({
      id: item.name,
    })
    return (
      <li
        ref={setNodeRef}
        key={item.name}
        className="component-item w-2/6 h-28 flex flex-col justify-center items-center"
        {...listeners}
        {...attributes}
      >
        {item.icon}
        <span className="text-slate-400 mt-2">{item.text}</span>
      </li>
    )
  }

  const dragElement = (activeId) => {
    const data = componentsList.filter((com) => com.name === activeId)
    return data && data.length ? (
      <li className="drag-item w-2/6 h-28 flex flex-col justify-center items-center">
        {data[0].icon}
        <span className="text-slate-400 mt-2">{data[0].text}</span>
      </li>
    ) : null
  }

  return (
    <section>
      <div>
        <Flex wrap>{componentsList.map((item) => ListItem(item))}</Flex>
      </div>
      <DragOverlay>{dragElement(activeId)}</DragOverlay>
    </section>
  )
}

export default ComponentsList

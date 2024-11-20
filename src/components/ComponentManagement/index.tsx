import { usePage, usePageDispatch } from "@/app/PageContext"
import { List, Divider, Popconfirm } from "antd"
import { DeleteFilled } from "@ant-design/icons"

const componentsMap = {
  SearchCom: "商品搜索",
  TitleCom: "标题文本",
  TabCom: "底部导航",
  ProductCom: "商品",
}

const ComponentManagement = () => {
  const page = usePage()
  const dispatch = usePageDispatch()

  const confirmDelete = (index) => {
    dispatch({
      type: "deleted",
      index,
    })
  }

  return (
    <section>
      <Divider orientation="left">组件设置</Divider>
      <p className="text-slate-400 text-xs mb-2">
        底部导航组件为固定页面底部，无需调整位置
      </p>
      <List
        dataSource={page.componentList}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Popconfirm
                title="您确定要删除该组件吗?"
                okText="确定"
                cancelText="取消"
                onConfirm={() => {
                  confirmDelete(index)
                }}
              >
                <DeleteFilled />
              </Popconfirm>,
            ]}
          >
            {componentsMap[item.name]}
          </List.Item>
        )}
      ></List>
    </section>
  )
}

export default ComponentManagement

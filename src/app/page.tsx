"use client"
import { Table, Layout } from "antd"
const { Header, Sider, Content } = Layout
import { UnorderedListOutlined } from "@ant-design/icons"
import { useRouter } from "next/navigation"

const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
]

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
]

const contentStyle: React.CSSProperties = {
  margin: "40px",
}

export default function Home() {
  const router = useRouter()
  const gotoEditPage = (index) => {
    router.push(`/page-editor?id=${index}`)
  }

  return (
    <div>
      <Layout className="overflow-hidden w-full h-dvh ">
        <Sider
          width="5%"
          className="bg-white border-solid border-r border-slate-200 text-center"
          style={{ color: "#1677ff" }}
        >
          <UnorderedListOutlined
            className="mt-16 mb-1"
            style={{ fontSize: "30px" }}
          />
          <p className="text-sm font-bold">列表</p>
        </Sider>
        <Layout>
          <Header className="h-16 bg-white border-solid border-b border-slate-200"></Header>
          <Content style={contentStyle}>
            <Table
              dataSource={dataSource}
              columns={columns}
              onRow={(record, index) => {
                return {
                  onClick: () => {
                    gotoEditPage(index)
                  },
                }
              }}
            />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

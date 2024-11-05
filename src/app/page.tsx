"use client"
import { Layout } from "antd"
const { Header, Sider, Content } = Layout

const contentStyle: React.CSSProperties = {
  height: "calc(100vh-64)",
  backgroundColor: "#f7f8fa",
}

export default function Home() {
  return (
    <div>
      <Layout className="overflow-hidden w-full h-dvh ">
        <Header className="h-16 bg-white border-solid border-b border-slate-200">
          Header
        </Header>
        <Layout>
          <Sider
            width="5%"
            className="bg-white border-solid border-r border-slate-200"
          >
            Sider
          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
      </Layout>
    </div>
  )
}

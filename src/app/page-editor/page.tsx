"use client"
import { Layout } from "antd"
const { Header, Sider } = Layout
import { BgColorsOutlined } from "@ant-design/icons"
import TopMenu from "@/components/TopMenu"
import DragScale from "@/components/DragScale"
import RightSettings from "@/components/RightSettings"
import { PageProvider } from "../PageContext"

const contentStyle: React.CSSProperties = {
  height: "calc(100vh-64)",
  backgroundColor: "#f7f8fa",
}

export default function Home() {
  return (
    <div>
      <Layout className="overflow-hidden w-full h-dvh ">
        <Sider
          width="5%"
          className="bg-white border-solid border-r border-slate-200 text-center"
          style={{ color: "#1677ff" }}
        >
          <BgColorsOutlined
            className="mt-16 mb-1"
            style={{ fontSize: "30px" }}
          />
          <p className="text-sm font-bold">装修</p>
        </Sider>
        <Layout>
          <Header className="h-16 bg-white border-solid border-b border-slate-200">
            <TopMenu />
          </Header>
          <PageProvider>
            <Layout style={contentStyle}>
              <DragScale />
              <Sider width="27%" className="bg-white">
                <RightSettings />
              </Sider>
            </Layout>
          </PageProvider>
        </Layout>
      </Layout>
    </div>
  )
}

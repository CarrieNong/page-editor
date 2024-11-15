"use client"
import { Layout } from "antd"
const { Header, Sider, Content } = Layout
import { BgColorsOutlined } from "@ant-design/icons"
import TopMenu from "@/components/TopMenu"
import ComponentsList from "@/components/ComponentsList"
import PhonePage from "@/components/PhonePage"
import RightSettings from "@/components/RightSettings"
import { PageProvider } from "./PageContext"
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"

const contentStyle: React.CSSProperties = {
  height: "calc(100vh-64)",
  backgroundColor: "#f7f8fa",
}

export default function Home() {
  const [activeId, setActiveId] = useState(null)
  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event) {
    setActiveId(null)
    const { over } = event

    if (over) {
      console.log("handleDragEnd")
    }
  }
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
          <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <PageProvider>
              <Layout style={contentStyle}>
                <Sider width="20%" className="bg-white">
                  <ComponentsList activeId={activeId} />
                </Sider>
                <Content>
                  <PhonePage />
                </Content>
                <Sider width="27%" className="bg-white">
                  <RightSettings />
                </Sider>
              </Layout>
            </PageProvider>
          </DndContext>
        </Layout>
      </Layout>
    </div>
  )
}

"use client"
import { Layout } from "antd"
const { Sider, Content } = Layout
import ComponentsList from "@/components/ComponentsList"
import PhonePage from "@/components/PhonePage"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"

const DragScale = () => {
  const page = usePage()
  const dispatch = usePageDispatch()
  const [activeId, setActiveId] = useState(null)
  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragOver(event) {
    const { over } = event
    let componentList = page.componentList
    if (over) {
      componentList.push({ name: "AddCom" })
      dispatch({
        type: "added",
        componentList,
      })
    } else {
      dispatch({
        type: "deleted",
        name: "AddCom",
      })
    }
  }

  function handleDragEnd(event) {
    setActiveId(null)
    const { over } = event

    if (over) {
      let componentList = page.componentList
      componentList.push({ name: event.active.id })
      componentList = page.componentList.filter((t) => t.name !== "AddCom")
      dispatch({
        type: "added",
        componentList,
      })
    }
  }
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <Sider width="20%" className="bg-white">
        <ComponentsList activeId={activeId} />
      </Sider>
      <Content>
        <PhonePage />
      </Content>
    </DndContext>
  )
}

export default DragScale

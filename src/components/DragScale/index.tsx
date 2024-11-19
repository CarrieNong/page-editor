"use client"
import { Layout, message } from "antd"
const { Sider, Content } = Layout
import ComponentsList from "@/components/ComponentsList"
import PhonePage from "@/components/PhonePage"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { DndContext } from "@dnd-kit/core"
import { useState, useEffect } from "react"

const DragScale = () => {
  const page = usePage()
  const dispatch = usePageDispatch()
  const [activeId, setActiveId] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (showWarning) {
      messageApi.open({
        type: "warning",
        content: "当前组件只能添加一个",
      })
      setShowWarning(false) // 防止重复触发
    }
  }, [showWarning, messageApi])

  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragOver(event) {
    console.log("handleDragOver", event)
    const { over } = event
    let componentList = page.componentList
    if (over) {
      const addCom = page.componentList.filter((t) => t.name == "AddCom")
      if (addCom.length) return
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
      let comName = event.active.id
      const tabCom = page.componentList.filter((t) => t.name == "TabCom")
      const existTabCom = comName == "TabCom" && tabCom.length
      componentList = componentList.filter((t) => t.name !== "AddCom")
      if (existTabCom) {
        setShowWarning(true) // 触发警告消息
        dispatch({
          type: "changed",
          page: {
            ...page,
            componentList,
          },
        })
      } else {
        componentList.push({ name: comName })
        dispatch({
          type: "added",
          componentList,
        })
      }
    }
  }
  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      {contextHolder}
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

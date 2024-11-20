"use client"
import { Layout, message } from "antd"
const { Sider, Content } = Layout
import ComponentsList from "@/components/ComponentsList"
import PhonePage from "@/components/PhonePage"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { DndContext, MouseSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useState, useEffect } from "react"

const DragScale = () => {
  const page = usePage()
  const dispatch = usePageDispatch()
  const [activeId, setActiveId] = useState(null)
  const [messageApi, contextHolder] = message.useMessage()
  const [showWarning, setShowWarning] = useState(false)

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 1, // 鼠标移动 5px 后激活拖拽
    },
  })

  const sensors = useSensors(mouseSensor)

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
    // console.log("handleDragOver", event)
  }

  function handleDragMove(event) {
    const { over, active } = event
    let componentList = page.componentList

    if (over) {
      const overId = over.id // 放置目标
      const overIndex = componentList.findIndex((comp) => comp.id === overId)
      if (overId === "phone") {
        // 放在空白区域末尾
        dispatch({
          type: "inserted",
          insertInfo: {
            index: -1,
            position: "phone",
          },
        })
      } else if (overIndex !== -1) {
        // 拖拽到已有组件区域，计算插入点
        const activeBounds = active.rect.current.translated
        const overBounds = over.rect

        const activeCenter = activeBounds.top + activeBounds.height / 2
        const overCenter = overBounds.top + overBounds.height / 2
        if (activeCenter <= overCenter) {
          // 插入到目标组件上方
          dispatch({
            type: "inserted",
            insertInfo: {
              index: overIndex,
              position: "top",
            },
          })
        } else if (activeCenter > overCenter) {
          // 插入到目标组件下方
          dispatch({
            type: "inserted",
            insertInfo: {
              index: overIndex,
              position: "bottom",
            },
          })
        }
      }
    } else {
      dispatch({
        type: "inserted",
        insertInfo: {
          index: null,
          position: null,
        },
      })
    }
  }

  function handleDragEnd(event) {
    setActiveId(null)
    dispatch({
      type: "inserted",
      insertInfo: {
        index: null,
        position: null,
      },
    })
    const { over } = event

    if (over) {
      let componentList = page.componentList
      let comName = event.active.id
      const tabCom = page.componentList.filter((t) => t.name == "TabCom")
      const existTabCom = comName == "TabCom" && tabCom.length
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
        componentList.push({
          name: comName,
          id: `${comName}${componentList.length + 1}`,
        })
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
      onDragMove={handleDragMove}
      sensors={sensors}
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

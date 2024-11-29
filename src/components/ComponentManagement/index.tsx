import { List, Divider, Popconfirm } from "antd"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { DeleteFilled } from "@ant-design/icons"
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  pointerWithin,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const componentsMap = {
  SearchCom: "商品搜索",
  TitleCom: "标题文本",
  TabCom: "底部导航",
  ProductCom: "商品",
}

// 单个可排序的项目
const SortableItem = ({ item, confirmDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: "grab",
  }

  return (
    <List.Item
      ref={setNodeRef}
      style={style}
      actions={[
        <Popconfirm
          title="您确定要删除该组件吗?"
          okText="确定"
          cancelText="取消"
          onConfirm={(e) => {
            e.stopPropagation()
            confirmDelete()
          }}
          style={{ cursor: "pointer" }}
        >
          <DeleteFilled />
        </Popconfirm>,
      ]}
    >
      <div {...attributes} {...listeners}>
        {componentsMap[item.name]}
      </div>
    </List.Item>
  )
}

// 主组件
const DragAndDropList = () => {
  const page = usePage()
  const dispatch = usePageDispatch()

  const sensors = useSensors(useSensor(PointerSensor))

  const confirmDelete = (index) => {
    dispatch({
      type: "deleted",
      index,
    })
  }

  const handleDragEnd = (event) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      const prev_componentList = page.componentList
      const oldIndex = prev_componentList.findIndex(
        (item) => item.id === active.id
      )
      const newIndex = prev_componentList.findIndex(
        (item) => item.id === over.id
      )
      const componentList = arrayMove(prev_componentList, oldIndex, newIndex)
      dispatch({
        type: "changed",
        page: {
          ...page,
          componentList,
        },
      })
    }
  }

  return (
    <section>
      <Divider orientation="left">组件设置</Divider>
      <p className="text-slate-400 text-xs mb-2">
        底部导航组件为固定页面底部，无需调整位置
      </p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={page.componentList}
          strategy={verticalListSortingStrategy}
        >
          <List
            dataSource={page.componentList}
            renderItem={(item, index) => (
              <SortableItem
                key={item.name}
                item={item}
                id={item.id}
                confirmDelete={() => {
                  confirmDelete(index)
                }}
              />
            )}
          ></List>
        </SortableContext>
      </DndContext>
    </section>
  )
}

export default DragAndDropList

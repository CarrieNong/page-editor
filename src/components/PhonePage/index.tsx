import Image from "next/image"
import React from "react"
import topUrl from "@/app/assets/images/phoneTop.png"
import AddCom from "../PhoneComponents/AddCom"
import HeaderCom from "../PhoneComponents/HeaderCom"
import SearchCom from "../PhoneComponents/SearchCom"
import TitleCom from "../PhoneComponents/TitleCom"
import TabCom from "../PhoneComponents/TabCom"
import ProductCom from "../PhoneComponents/ProductCom"
import "./index.css"
import { usePage, usePageDispatch } from "@/app/PageContext"
import { useDroppable } from "@dnd-kit/core"

const componentsMap = {
  AddCom,
  SearchCom,
  TitleCom,
  TabCom,
  ProductCom,
}

const PhonePage = () => {
  const page = usePage()
  const dispatch = usePageDispatch()
  const { setNodeRef } = useDroppable({
    id: "phone",
  })

  const chooseComponent = (id) => {
    dispatch({
      type: "set",
      activeComponent: id,
    })
  }

  return (
    <div className="w-1/2 h-full overflow-y-scroll m-auto content">
      <div
        className="my-11 mx-auto shadow-md phone-wrap relative"
        style={{
          backgroundColor: page.pageSetting.bgColor,
        }}
        ref={setNodeRef}
      >
        <Image src={topUrl} alt="phone" />
        <HeaderCom />
        {page.componentList.map((component, index) => {
          const renderCom = componentsMap[component.name]
          return (
            <section
              onClick={() => {
                chooseComponent(component.id)
              }}
              key={index}
              className={`${
                component.name === "TabCom"
                  ? "absolute bottom-0 left-0 w-full bg-white"
                  : ""
              } ${
                component.id === page.activeComponent
                  ? "active-component"
                  : "phone-component"
              }`}
            >
              {page.insertInfo.index === index &&
                page.insertInfo.position === "top" && <AddCom />}
              <DroppableItem
                Component={renderCom}
                data={component.data}
                id={component.id}
              />

              {page.insertInfo.index === index &&
                page.insertInfo.position === "bottom" && <AddCom />}
            </section>
          )
        })}
        {page.insertInfo.index === -1 &&
          page.insertInfo.position === "phone" && <AddCom />}
      </div>
    </div>
  )
}

const DroppableItem = ({ id, Component, data }) => {
  const { setNodeRef } = useDroppable({ id: id })

  return (
    <div ref={setNodeRef}>
      <Component data={data} />
    </div>
  )
}

export default PhonePage

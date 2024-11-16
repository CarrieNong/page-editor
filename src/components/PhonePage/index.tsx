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
import { usePage } from "@/app/PageContext"
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
  const { setNodeRef } = useDroppable({
    id: "unique-id",
  })

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
          const Component = componentsMap[component.name]
          return <Component key={index} />
        })}
      </div>
    </div>
  )
}

export default PhonePage

import { usePage, usePageDispatch } from "@/app/PageContext"
import SearchCom from "./components/SearchCom"
import TitleCom from "./components/TitleCom"
import TabCom from "./components/TabCom"
import ProductCom from "./components/ProductCom"

const componentsMap = {
  SearchCom,
  TitleCom,
  TabCom,
  ProductCom,
}

const ComponentSetting = () => {
  const page = usePage()
  const dispatch = usePageDispatch()

  const ActiveComponent = page.activeComponent
    ? componentsMap[page.activeComponent.slice(0, -1)]
    : null

  return <div>{ActiveComponent ? <ActiveComponent /> : "null"}</div>
}

export default ComponentSetting

import Image from "next/image"
import topUrl from "@/app/assets/images/phoneTop.png"
import HeaderCom from "../PhoneComponents/HeaderCom"
import SearchCom from "../PhoneComponents/SearchCom"
import TitleCom from "../PhoneComponents/TitleCom"
import TabCom from "../PhoneComponents/TabCom"
import ProductCom from "../PhoneComponents/ProductCom"
import "./index.css"
import { usePage } from "@/app/PageContext"

const PhonePage = () => {
  const page = usePage()

  return (
    <div className="w-1/2 h-full overflow-y-scroll m-auto content">
      <div
        className="my-11 mx-auto shadow-md phone-wrap relative"
        style={{
          backgroundColor: page.pageSetting.bgColor,
        }}
      >
        <Image src={topUrl} alt="phone" />
        <HeaderCom />
        <SearchCom />
        <TitleCom />
        <TabCom />
        <ProductCom />
      </div>
    </div>
  )
}

export default PhonePage

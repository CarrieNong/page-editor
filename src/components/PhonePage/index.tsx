import Image from "next/image"
import topUrl from "@/app/assets/images/phoneTop.png"
import HeaderCom from "../PhoneComponents/HeaderCom"
import SearchCom from "../PhoneComponents/SearchCom"
import "./index.css"

const PhonePage = () => {
  return (
    <div className="w-1/2 h-full overflow-y-scroll m-auto content">
      <div className="my-11 mx-auto bg-slate-50 shadow-md phone-wrap">
        <Image src={topUrl} alt="phone" />
        <HeaderCom />
        <SearchCom />
      </div>
    </div>
  )
}

export default PhonePage

import Image from "next/image"
import topUrl from "@/app/assets/images/phoneTop.png"
import "./index.css"

const PhonePage = () => {
  return (
    <div className="w-1/2 h-full overflow-y-scroll m-auto content">
      <div className="my-11 mx-auto bg-slate-50 shadow-md phone-wrap">
        <Image src={topUrl} alt="phone" />
      </div>
    </div>
  )
}

export default PhonePage

import { LeftOutline } from "antd-mobile-icons"
import { usePage } from "@/app/PageContext"

const HeaderCom = () => {
  const page = usePage()
  return (
    <section className="w-full h-9 flex justify-center items-center relative bg-white">
      {page.pageSetting.isBack && (
        <div className="absolute top-2 left-1">
          <LeftOutline className="text-xl" />
        </div>
      )}
      <div>{page.pageSetting.title}</div>
    </section>
  )
}

export default HeaderCom

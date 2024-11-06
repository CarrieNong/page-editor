import { LeftOutlined } from "@ant-design/icons"

const HeaderCom = () => {
  return (
    <section className="w-full h-9 flex justify-center items-center relative bg-white">
      <div className="absolute top-2 left-1">
        <LeftOutlined className="text-xl" />
      </div>
      <div>页面标题</div>
    </section>
  )
}

export default HeaderCom

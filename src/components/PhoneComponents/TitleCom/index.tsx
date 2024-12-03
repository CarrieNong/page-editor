import { RightOutline } from "antd-mobile-icons"

const TitleCom = ({ data }) => {
  return (
    <section className="py-1.5 px-3 bg-white">
      <div className="flex justify-between">
        <span className="text-lg">{data.title}</span>
        {data.url && (
          <span className="text-slate-400 flex items-center text-xs">
            查看更多
            <RightOutline />
          </span>
        )}
      </div>
      {data.desc && <div className="text-slate-400">{data.desc}</div>}
    </section>
  )
}

export default TitleCom

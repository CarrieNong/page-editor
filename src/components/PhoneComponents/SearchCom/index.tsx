import { SearchBar } from "antd-mobile"

const SearchCom = ({ data }) => {
  return (
    <div
      className="p-2"
      style={{
        backgroundColor: data.bgColor,
      }}
    >
      <SearchBar
        placeholder={data.hotWord}
        style={{
          "--height": `${data.boxHeight}px`,
        }}
      />
    </div>
  )
}

export default SearchCom

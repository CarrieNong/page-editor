import { Image, Grid } from "antd-mobile"
import { BankcardOutline } from "antd-mobile-icons"

const productList = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
    title: "这里显示商品名称这里显示商品名称",
    desc: "这里显示商品描述这里显示商品描述这里显示商品描述这里显示商品描述",
    price: 99,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
    title: "这里显示商品名称这里显示商品名称",
    desc: "这里显示商品描述这里显示商品描述这里显示商品描述这里显示商品描述",
    price: 99,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
    title: "这里显示商品名称这里显示商品名称",
    desc: "这里显示商品描述这里显示商品描述这里显示商品描述这里显示商品描述",
    price: 99,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60",
    title: "这里显示商品名称这里显示商品名称",
    desc: "这里显示商品描述这里显示商品描述这里显示商品描述这里显示商品描述",
    price: 99,
  },
]

/*
  param big/two/three/list/scroll
*/
const showMode = "list"

const modeList = {
  big: 1,
  two: 2,
  three: 3,
  list: 1,
}

function Card({ product }) {
  return (
    <div className={showMode === "list" ? "w-full flex flex-row" : ""}>
      <div
        className={
          showMode === "list" ? "w-1/3 mr-2" : "rounded-sm overflow-hidden"
        }
      >
        <Image src={product.src} width={showMode === "list" ? 112 : ""} />
      </div>
      <div className={showMode === "list" ? "w-2/3" : ""}>
        <div className="py-1">
          <p className="text-sm truncate">{product.title}</p>
          <p className="mt-1 text-xs text-slate-400 truncate">{product.desc}</p>
        </div>
        <div className="flex justify-between pb-2 items-center px-2">
          <span className="font-bold">¥{product.price}</span>
          <span>
            <BankcardOutline />
          </span>
        </div>
      </div>
    </div>
  )
}

const ProductCom = () => {
  return (
    <section className="bg-white p-4">
      {showMode == "scroll" ? (
        <div className="flex w-full overflow-x-scroll">
          {productList.map((product) => (
            <div className="w-1/4 mr-2" key={product.id}>
              <Card product={product} />
            </div>
          ))}
        </div>
      ) : (
        <Grid columns={modeList[showMode]} gap={8}>
          {productList.map((product) => (
            <Grid.Item key={product.id}>
              <Card product={product} />
            </Grid.Item>
          ))}
        </Grid>
      )}
    </section>
  )
}

export default ProductCom
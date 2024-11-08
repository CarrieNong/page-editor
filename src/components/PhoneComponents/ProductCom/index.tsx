import { Image } from "antd-mobile"
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

const ProductCom = () => {
  return (
    <section className="bg-white p-4">
      {productList.map((product) => (
        <div key={product.id}>
          <div className="rounded-sm overflow-hidden">
            <Image src={product.src} />
          </div>
          <div className="py-1">
            <p className="text-base">{product.title}</p>
            <p className="mt-1 text-xs text-slate-400">{product.desc}</p>
          </div>
          <div className="flex justify-between pb-2 items-center px-2">
            <span className="font-bold">¥{product.price}</span>
            <span>
              <BankcardOutline />
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ProductCom

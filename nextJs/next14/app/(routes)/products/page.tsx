import Link from "next/link";

const Products = () => {
  return (
      <div>
          <p>Products HomePage</p>
          <p><Link href="/products/first" prefetch={false}>First Product</Link></p>
          <p><Link href="/products/second" prefetch={false}>Second Product</Link></p>
    </div>
  )
}

export default Products
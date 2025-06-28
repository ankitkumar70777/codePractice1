const ProductDetailPage = ({ params }: { params: { productId: string } }) => {
    console.log("params",params);
  return (
    <div>ProductDetailPage {params.productId}</div>
  )
}

export default ProductDetailPage
"use client";
import { useParams } from "next/navigation";
import products from "../../../staticData/productsData";

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;
  console.log("id", id);
  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>
        Product Detail Page for product number {product.id}
      </h1>
    </div>
  );
};

export default ProductDetails;

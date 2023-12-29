import React from "react";
import { useParams } from "react-router-dom";
import products from "../productsData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id, 10));

  if (!product) {
    return <div> Product not found </div>;
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

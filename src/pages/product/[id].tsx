import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ProductType } from "../../../types";

const Product = (product: ProductType) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt="" />
      <p>Product detail</p>
    </div>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async (product) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const products = await res.json();

  const paths = products.map((product: any) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${params.id as string}`
  //   );
  //   const user = await res.json();
  return {
    props: {
      //   data,
    },
  };
};

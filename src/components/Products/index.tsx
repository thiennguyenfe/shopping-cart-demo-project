import { Tabs } from "antd";
import React from "react";
import AllProduct from "./AllProduct";

const Products = () => {
  return (
    <div className="products-container">
      <div className="products-wrapper">
        <h1 className="title">Our Products</h1>
        <Tabs
          defaultActiveKey="1"
          centered
          items={[
            {
              label: "ALL",
              key: "1",
              children: <AllProduct />,
            },
            {
              label: "NEWEST",
              key: "2",
              children: <AllProduct />,
            },
            {
              label: "TRENDING",
              key: "3",
              children: <AllProduct />,
            },
            {
              label: "BEST SELLER",
              key: "4",
              children: <AllProduct />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Products;

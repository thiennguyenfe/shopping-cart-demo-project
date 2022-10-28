import { Col, Row, Tabs } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decreaseProduct } from "../../../redux/slice/cartSlice";
import AllProduct from "../AllProduct";

const ProductDetail = ({ product }: any) => {
  console.log(product);
  const dispatch = useDispatch();

  const handleIncreaseCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product: any) => {
    dispatch(decreaseProduct(product));
  };
  return (
    <div className="product-detail-container">
      <div className="product-detail-wrapper">
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="product-info">
              <h1 className="name">{product.name}</h1>
              <p className="price">${product.price}</p>
              <div className="product-quantity">
                <button onClick={() => handleDecreaseCart(product)}>-</button>
                <div className="count">{product.cartQuantity}</div>
                <button onClick={() => handleIncreaseCart(product)}>+</button>
              </div>
              <p className="description">{product.description}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Tabs
            defaultActiveKey="1"
            centered
            items={[
              {
                label: "Description",
                key: "1",
                children: <AllProduct />,
              },
              {
                label: "Reviews",
                key: "2",
                children: <AllProduct />,
              },
            ]}
          />
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;

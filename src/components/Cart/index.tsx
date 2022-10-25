import { Breadcrumb, Empty } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import { TableRowSelection } from "antd/lib/table/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { HiTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import {
  addToCart,
  clearCart,
  decreaseProduct,
  getTotal,
  removeFromCart,
} from "../../redux/slice/cartSlice";

interface ICart {
  key: React.Key;
  name: string;
  image: string;
  price: number;
  cartQuantity: number;
}

const Cart1 = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleIncreaseCart = (product: any) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product: any) => {
    dispatch(decreaseProduct(product));
  };

  const handleRemoveFromCart = (product: any) => {
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const columns: ColumnsType<ICart> = [
    {
      title: "Product",
      dataIndex: "image",
      render: ({ image, name }) => (
        <>
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
          </div>
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Quantity",
      dataIndex: "cartQuantity",
    },
    {
      title: "Total",
      dataIndex: "address",
    },
    {
      title: "Action",
      dataIndex: "",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ICart[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: ICart) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="shopping-cart-container">
      <div className="shopping-cart-wrapper">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="title">Shopping Cart</h1>
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Your cart is currently empty"
            />
            <div className="start-shopping">
              <Link href="/">
                <div className="start-btn">
                  <BsArrowLeft />
                  <span>Start Shopping</span>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={cart.cartItems}
          />
        )}
      </div>
    </div>
  );
};

export default Cart1;

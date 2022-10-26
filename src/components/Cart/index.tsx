import { Breadcrumb, Empty } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  const [selectedRows, setSelectedRows] = useState<ICart[]>([]);

  console.log("selectedRows", selectedRows);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  useEffect(() => {
    rowSelection;
    selectedTotal;
  }, [cart.cartItems]);

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
      render: ({ image, name }) => (
        <div className="cart-product">
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
          </div>
        </div>
      ),
    },
    {
      title: "Price",
      render: (cartItem: ICart) => (
        <div className="cart-product-price">${cartItem.price}</div>
      ),
    },
    {
      title: "Quantity",
      render: (cartItem: ICart) => (
        <div className="cart-product-quantity">
          <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
          <div className="count">{cartItem.cartQuantity}</div>
          <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
        </div>
      ),
    },
    {
      title: "Total",
      render: (cartItem: ICart) => (
        <div className="cart-product-total-price">
          ${cartItem.price * cartItem.cartQuantity}
        </div>
      ),
    },
    {
      title: "Action",
      render: (cartItem: ICart) => (
        <div className="cart-product-trash">
          <button onClick={() => handleRemoveFromCart(cartItem)}>
            <HiTrash />
          </button>
        </div>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ICart[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setSelectedRows(selectedRows);
    },
  };

  let selectedTotal = selectedRows.reduce(
    (cartTotal, cartItem) => {
      const { price, cartQuantity } = cartItem;
      const itemTotal = price * cartQuantity;

      cartTotal.total += itemTotal;
      cartTotal.quantity += cartQuantity;

      return cartTotal;
    },
    { total: 0, quantity: 0 }
  );

  console.log("quantity", selectedTotal.quantity);

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
          <>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={cart.cartItems}
            />
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  {selectedRows.length > 0 ? (
                    <span className="amount">${selectedTotal.total}</span>
                  ) : (
                    <span className="amount">$0</span>
                  )}
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                {selectedRows.length > 0 ? (
                  <button className="checkout-btn">Check out</button>
                ) : (
                  <button className="checkout-btn-opacity" disabled>
                    Check out
                  </button>
                )}
                <div className="continue-shopping">
                  <Link href="/">
                    <div className="continue-btn">
                      <BsArrowLeft />
                      <span>Continue Shopping</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart1;

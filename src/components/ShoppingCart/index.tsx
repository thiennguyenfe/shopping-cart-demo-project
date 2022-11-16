import { Breadcrumb, Empty } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
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

const ShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

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

  const handleGoToCheckout = () => {
    router.push("/checkout");
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
          <div className="cart-container">
            <div className="cart-titles">
              <h3 className="product">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
              <h3 className="action">Action</h3>
            </div>
            <div className="cart-items">
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <div className="cart-item" key={cartItem.key}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                      </div>
                    </div>
                    <div className="cart-product-price">${cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.cartQuantity}</div>
                      <button onClick={() => handleIncreaseCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      ${cartItem.price * cartItem.cartQuantity}
                    </div>
                    <div className="cart-product-trash">
                      <button onClick={() => handleRemoveFromCart(cartItem)}>
                        <HiTrash />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button onClick={handleGoToCheckout}>Check out</button>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;

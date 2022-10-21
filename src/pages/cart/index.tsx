import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import ShoppingCart from "../../components/ShoppingCart";

const Cart = () => {
  return (
    <div>
      <Navigation />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default Cart;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./header";
import MediaCard from "./Card";
import SignInSide from "./auth/login";
import SignUpPage from "./auth/signup";
import SingleProduct from "./products/Products";
import { CartProvider } from "./cart/CartContext";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
import OrderSummary from "./checkout/Ordersummary";
import Checkoutprd from "./checkout/Checkoutprd";


function App() {
  return (
    <BrowserRouter>
      <Example /> {/* Example component will be displayed on every page */}
      <CartProvider>
      <Routes>
        <Route path="/" element={<><MediaCard /></>} /> {/* MediaCard only on root page */}
        <Route path="/signin" element={<SignInSide />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkoutprd" element={<Checkoutprd />} />
      </Routes>
      </CartProvider>
    </BrowserRouter>

  );
}

export default App;
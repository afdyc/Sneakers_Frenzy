import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Brand from "./components/Brand";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Login from "./components/Login";
import Product from "./components/Product";
import Register from "./components/Register";
import ThankYou from "./components/ThankYou";
import ProtectedRoute from "./ProtectedRoute";

const View = () => {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/specific/:name" element={<Product />} />
            <Route path="/:brand" element={<Brand />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/login/cart" element={<Cart />} />
              <Route path="/login/cart/thankyou" element={<ThankYou />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default View;

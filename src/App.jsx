import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import User from "./pages/User";
import Order from "./pages/Order";
import Catalog from "./pages/Catalog";
import Voucher from "./pages/Voucher";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
        <Route path="/order" element={<Order />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/voucher" element={<Voucher />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;

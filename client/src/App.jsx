import React from "react";
import Topbar from "./components/topbar/Topbar";
import MySidebar from "./components/sidebar/MySidebar";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./app.css";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Topbar />
      <div className="container">
        <MySidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;

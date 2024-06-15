import React, { useEffect, useState } from "react";
import Signup from "./Users/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Users/Header";
import Home from "./Users/Home";
import Logout from "./Users/Logout";
import PrivateRoute from "./Users/PrivateRoute";
import Error from "./Users/Error";
import UserLogin from "./Users/UserLogin";
import AdminLogin from "./Admin/AdminLogin";
import Order from "./Users/Order";
import Cart from "./Users/Cart";
import AddProduct from "./Admin/AddProduct";
import AddCategory from "./Admin/AddCategory";
import ViewProduct from "./Admin/ViewProduct";
import ViewCategory from "./Admin/ViewCategory";
import ProtectedAdmin from "./Admin/ProtectedAdmin";
import Delete from "./Admin/Delete";
import Edit from "./Admin/Edit";

const App = () => {
  const [admin, setAdmin] = useState();
  useEffect(() => {
    const data = localStorage.getItem('admin');
    setAdmin(data);
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Order" element={<Order />}>Order</Route>
          <Route path="/Logout" element={<Logout />}></Route>
        </Route>

        <Route element={<ProtectedAdmin />}>
          <Route path="/ViewProduct" element={<ViewProduct />}></Route>
          <Route path="/ViewCategory" element={<ViewCategory />}></Route>
          <Route path="/Delete/:id" element={<Delete />}></Route>
          <Route path="/Edit/:id" element={<Edit />}></Route>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
          <Route path="/AddCategory" element={<AddCategory />}></Route>
        </Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/AdminLogin" element={<AdminLogin />}></Route>
        <Route path="/UserLogin" element={<UserLogin />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;

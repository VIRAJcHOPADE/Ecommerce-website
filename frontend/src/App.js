import React from "react";
import './App.css';
import { useState} from "react";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile.jsx";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import ResetPassword from "./component/User/ResetPassword.jsx";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping.jsx";
import OrderSuccess from "./component/Cart/OrderSuccess";
import Payment from "./component/Cart/Payment";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.jsx";
import ProductList from "./component/Admin/ProductList.jsx";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import Home from "./component/Home/Home"
// import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/product/ProductDetails.js"
import Products from "./component/product/Products.js"
import Search from "./component/product/Search.js"
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store"
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js"
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import { Fragment } from "react";
import NewProduct from "./component/Admin/NewProduct";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() =>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();

  },[]);

    

  return (
    <Fragment>
      {stripeApiKey && (
    <Elements stripe={loadStripe(stripeApiKey)}>
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      
       
      <Route exact path="/process/payment" element={<Payment/>} />  
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
      {/* <Route exact path="/sad" element={<Loader/>} /> */}
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/products/:keyword" element={<Products />} />
      <Route exact path="/search" element={<Search/>} />
      <Route exact path="/login" element={<LoginSignUp/>} />
      <Route exact path="/account" element={<Profile/>} />
      <Route exact path="/me/update" element={<UpdateProfile/>} />
      <Route exact path="/password/update" element={<UpdatePassword/>} />
      <Route exact path="/password/forgot" element={<ForgotPassword/>} />
      <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/success" element={<OrderSuccess/>} />

      <Route exact path="/shipping" element={<Shipping/>} />
      <Route exact path="/orders" element={<MyOrders/>} />
      <Route exact path="/order/:id" element={<OrderDetails/>} />
      <Route exact path="/order/confirm" element={<ConfirmOrder/>} />
      <Route
          isAdmin={true}
          exact
          path="/admin/dashboard"
          element={<Dashboard/>}
        />
        <Route
          exact
          path="/admin/products"
          isAdmin={true}
          element={<ProductList/>}
        />
        <Route
          exact
          path="/admin/product"
          isAdmin={true}
          element={<NewProduct/>}
        />
      </Routes>
      <Footer />
    </Router>
    </Elements>
    )}
    </Fragment>
  );
}

export default App;

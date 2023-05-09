import React from "react";
import './App.css';
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.jsx";
// import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import ResetPassword from "./component/User/ResetPassword.jsx";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping.jsx";

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

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);


  React.useEffect(() =>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  },[]);

  return (
    
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
      {/* <Route exact path="/sad" element={<Loader/>} /> */}
      <Route exact path="/products" element={<Products/>} />
      <Route  path="/products/:keyword" element={<Products />} />
      <Route exact path="/search" element={<Search/>} />
      <Route exact path="/login" element={<LoginSignUp/>} />
      <Route exact path="/account" element={<Profile/>} />
      <Route exact path="/me/update" element={<UpdateProfile/>} />
      <Route exact path="/password/update" element={<UpdatePassword/>} />
      <Route exact path="/password/forgot" element={<ForgotPassword/>} />
      <Route exact path="/password/reset/:token" element={<ResetPassword/>} />
      <Route exact path="/cart" element={<Cart/>} />
      <Route exact path="/shipping" element={<Shipping/>} />
      <Route exact path="/order/confirm" element={<ConfirmOrder/>} />

      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;

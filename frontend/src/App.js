import React from "react";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import WebFont from "webfontloader";
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import Home from "./component/Home/Home"
import Loader from "./component/layout/Loader/Loader";
import ProductDetails from "./component/product/ProductDetails.jsx"
import Products from "./component/product/Products.jsx"
import Search from "./component/product/Search.jsx"

function App() {
  React.useEffect(() =>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  },[]);

  return (
    
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<ProductDetails/>} />
      {/* <Route exact path="/sad" element={<Loader/>} /> */}
      <Route exact path="/products" element={<Products/>} />
      <Route  path="/products/:keyword" element={<Products />} />
      <Route exact path="/search" element={<Search/>} />
      
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;

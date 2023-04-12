import React,{ Fragment } from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5"
import "./Home.css"
import Product from "./Product.jsx"

const product = {
    name: "Blue Tshirt",
    images: [{url:"https://i.ibb.co/DRST1n/1.webp"}],
    price:"$3000",
    _id:"abhishek",
};
const Home = () => {
  return (
  <>
        <div className = "banner">
            <p>Welcom to ECOMMERCE</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
            <button>
                Scroll <IoArrowBackCircleSharp/>
            </button>
            </a>
        </div>
        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />

        </div>
        
  </>  
  );
};

export default Home;
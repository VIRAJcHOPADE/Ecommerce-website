import React,{ Fragment , useEffect} from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5"
import "./Home.css"
import Product from "./ProductCard.jsx"
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
import {useAlert} from "react-alert"

const Home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products, productsCount } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
        console.log("products",products)
    },[dispatch,error,alert]);
    
  return (
  <Fragment> 
        {loading ? (
            <Loader/>
        ):<Fragment> 
        <MetaData title="Ecommerce"/>
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
           {products && 
            products.map((product) =>
            ( <Product key={product._id} product={product} />
            ))}
        </div>
        
  </Fragment>  }
  </Fragment>  
  );
};

export default Home;
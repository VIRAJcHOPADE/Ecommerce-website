import React, { Fragment, useEffect, useState } from "react";
import "./Products.css"
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
const Products = () => {
    const dispatch = useDispatch();
    const params = useParams();
   
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([0,25000]);
    const [keyword , setKeyword] = useState(null)
    const { products, loading , error, productsCount, resultPerPage } = 
    useSelector((state) => state?.products);
     
    // const keyword = params.keyword;
    const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

    const priceHandler = (event, newPrice) => {
      setPrice(newPrice);
    }
    useEffect(() => {
    setKeyword(params.keyword)
      if(keyword){
        
        dispatch(getProduct(keyword,currentPage));
      }
    },[dispatch,keyword,currentPage]); 

  return (
    <Fragment>
        {loading ? (<Loader/>
        ): (
          <Fragment>
            <h2 className="productsHeading">Products</h2>
            <div className ="products">
              {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            
            <div className = "filterBox">

            </div>
            
            { resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount || 10}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )} 
          </Fragment>
        )}
    </Fragment>
  )
}

export default Products
import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const Product = ({ product }) => {
  console.log(product);
  const options = {
      edit:false,
      color: "rgba(20,20,20,0.1)",
      activeColor: "tomato",
      size: window.innerWidth < 600 ? 20 : 25,
      vslue: product.ratings,
      isHalf: true,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
     {/* <img src={product.images[0].url} alt={product.name}/>  ERROR */}
     <p>{product.name}</p>
     <div>
        <ReactStars {...options} /> { " " }
         <spam>({product.numOfReviews} Reviews)</spam>
     </div>
     <spam>{`$${product.price}`}</spam>
    </Link>
  );
};

export default Product;
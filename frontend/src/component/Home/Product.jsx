import React from 'react'
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
    edit:false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    vslue: 2.5,
    isHalf: true,
};
const Product = ({ product }) => {
  console.log(product);
  return (
    <Link className="productCard" to={`${product._id}`}>
     <img src={product.images[0].url} alt={product.name}/>
     <p>{product.name}</p>
     <div>
        <ReactStars {...options} /> <spam>(256 Reviews)</spam>
     </div>
     <spam>{product.price}</spam>
    </Link>
  );
};

export default Product;
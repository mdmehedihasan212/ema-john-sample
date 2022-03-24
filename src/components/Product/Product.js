import React from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import './Product.css';

const Product = ({ product, handleToCart }) => {
    // console.log(product);
    const { img, name, price, ratings, seller } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller : {seller} star</small></p>
                <p><small>Ratings : {ratings}</small></p>
            </div>
            <button onClick={() => handleToCart(product)} className="btn-cart">
                <p className="btn-text">Add to Cart <FaCartArrowDown></FaCartArrowDown></p>
            </button>
        </div>
    );
};

export default Product;
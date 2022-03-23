import React from 'react';
import './Product.css';

const Product = ({ product }) => {
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
            <button className="btn-cart">
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;
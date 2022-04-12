import React from 'react';
import './Product.css';
import { MdAddShoppingCart } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product);
    const { id, img, name, price, seller, ratings } = product;

    const navigate = useNavigate();

    const handleAddToCart = id => {
        navigate(`/product/${name}`)
    }
    return (
        <div className='product-container'>
            <div className="ima-container">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <p>Name: {name}</p>
                <p>Price: {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <div className="add-to-cart">
                <button onClick={() => handleAddToCart(id)}>
                    <p>Add to Cart <MdAddShoppingCart></MdAddShoppingCart> </p>
                </button>

            </div>
        </div>
    );
};

export default Product;
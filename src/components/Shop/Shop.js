import React, { useEffect, useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const handleToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)

        // console.log(cart);
        // console.log(newCart);

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleToCart={handleToCart}></Product>)
                }
            </div>
            <div className="order-summary">
                <OrderSummary cart={cart}></OrderSummary>
            </div>
        </div>
    );
};

export default Shop;
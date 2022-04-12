import React from 'react';
import './Shop.css';
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useProduct();
    return (
        <div className='shop-item-container'>
            <div className="shop-details">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="order-details">
                <h1>Details</h1>
            </div>
        </div>
    );
};

export default Shop;
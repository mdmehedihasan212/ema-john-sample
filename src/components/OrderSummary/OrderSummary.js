import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ cart }) => {
    console.log(cart);
    return (
        <div className="summary-container">
            <h3>Order Summary</h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${ }</p>
            <p>Total Shipping Charge: ${ }</p>
            <p>Tax: ${ }</p>
            <h4>Grand Total: ${ }</h4>
        </div>
    );
};

export default OrderSummary;
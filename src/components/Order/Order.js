import React from 'react';
import useProduct from '../../hooks/useProduct';

const Order = () => {
    const [orders, setOrders] = useProduct();
    return (
        <div>
            <h1>Orders Length: {orders.length}</h1>
        </div>
    );
};

export default Order;
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {
    const { details } = useParams();
    console.log(details);
    return (
        <div>
            <h1>ProductsDetails</h1>
            <h4>Name: {details}</h4>
        </div>
    );
};

export default ProductsDetails;
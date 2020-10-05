import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {key} = useParams();
    const product = fakeData.find(data => data.key === key);

    return (
        <div>
            <h3 className="text-center">Product key : {key} Details</h3>
            <Product showAddToCart={false} product={product}></Product>
            
        </div>
    );
};

export default ProductDetail;
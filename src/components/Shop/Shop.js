import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const allProducts = fakeData.slice(0,30);

    const [product, setProduct] = useState(allProducts);

    const [cart, setCart] = useState([]);
    console.log(product);

    let count = 1;
    let newCart;

    useEffect(() => {
        const getProduct = getDatabaseCart();
        const getProductkey = Object.keys(getProduct);

        const getNewCart = getProductkey.map(key =>{
            const product = fakeData.find(product => product.key === key);
            product.quantity = getProduct[key];

            return product;

        })

        setCart(getNewCart);

    },[])

   

    const addCartHandler = (product) => {

        const matchProduct = cart.find(pd => pd.key === product.key);
        if(matchProduct){
            count = matchProduct.quantity +1;
            matchProduct.quantity = count;
            const otherProducts = cart.filter(pd => pd.key !== product.key);
            newCart = [...otherProducts, matchProduct];
        }

        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
         
        setCart(newCart);     

        // console.log(matchProduct);

        addToDatabaseCart(product.key, count);
      
        //  console.log('Clicked', product);

    }
    

    // console.log(product);
    // console.log(cart);


    
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        product.map(product => <Product  key={product.key} showAddToCart={true} addCartHandler={addCartHandler} product={product}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                             <button className="add-to-cart-button">Review Your Order</button> 
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
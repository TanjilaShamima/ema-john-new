import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import image from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);

    const [orderPlace, setOrderPlace] = useState(false);

    const removeCartHandler = (key) =>{
        const newCart = cart.filter(pd => pd.key !== key);
        setCart(newCart);
        removeFromDatabaseCart(key);
        
    }

    const placeOrder = () =>{
        setCart([]);
        setOrderPlace(true);
        processOrder();
    }

    useEffect(() =>{
        const getProduct = getDatabaseCart();
        const getProductKey = Object.keys(getProduct);

        const getNewCart = getProductKey.map(key =>{
            const product = fakeData.find(pro => pro.key === key);
            product.quantity = getProduct[key];

            return product;
        })

        setCart(getNewCart);
        // console.log(getProduct);
    }, []);

    let thanks;
    if(orderPlace) thanks = <img style={{marginLeft: '200px'}} src={image} alt=""/>

    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    <h1 className="text-center">Order Review : {cart.length}</h1>
                    {
                        cart.map(pd => <ReviewDetail key={pd.key} removeCartHandler={removeCartHandler} product={pd}></ReviewDetail> )

                    }
                    {
                        thanks
                    }

                </div>
                <div className="cart-container">
                    {
                          <Cart cart={cart}>
                               
                                    <button onClick={placeOrder} className="add-to-cart-button">Place Order</button> 
                                                               
                          </Cart>

                    }
                        
                    
                    
                </div>
            </div>
           
        </div>
    );
};

export default Review;
import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';

const Header = () => {
    const [cart, setCart] = useState([]);
   
    

    useEffect(() =>{
        const getProduct = getDatabaseCart();
        const getProductKey = Object.keys(getProduct);

        const getNewCart = getProductKey.map(key =>{
            const product = fakeData.find(pro => pro.key === key);
            product.quantity = getProduct[key];

            return product;
        })

        setCart(getNewCart);
         
    }, []);

    return (
        <div className="header">
            <div className="top-header">
                <img src={logo} alt=""/>
            </div>
            <div className="navigation">
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/inventory">Manage Inventory Here</a>
                </nav>

            </div>
            <div className="bottom-header">
                <input type="text" name="" placeholder="type here to Search" id=""/>
                <a href="/review"><FontAwesomeIcon style={{color:'white'}} icon={faShoppingCart} /> {cart.length}</a>


            </div>
            
        </div>
    );
};

export default Header;
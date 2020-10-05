import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // const quantity = cart.product.quantity;


    let price = 0;
    for(let i = 0; i < cart.length; i++) {
        price = price + (cart[i].price*cart[i].quantity);
    }

    let shipping = 0;
    if(price>100) shipping = 20;
    else if(price<100 && price>0) shipping = 10;

    let totalBeforetax = price + shipping;

    const tax = price * .15;

    const total = totalBeforetax + tax;

    function fixedValue(value){
        return value.toFixed(2);
    }
    return (
        <div className="cart">
            <div className="cart-head">
                <h5>Order Summary</h5>
                <p>Items Ordered :  {cart.length}</p>
            </div>
            <div className="cart-body">
                <p><small>Items: ${fixedValue(price)}</small></p>
                <p><small>Shipping & Handling: ${fixedValue(shipping)}</small></p>
                <p><small>Total before tax: ${fixedValue(totalBeforetax)}</small></p>
                <p><small>Estimated Tax: ${fixedValue(tax)}</small></p>
            </div>
            <h5>Order Total: ${fixedValue(total)}</h5>
            {
                props.children
            }
            
        </div>
    );
};

export default Cart;
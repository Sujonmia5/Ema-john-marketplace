import React from 'react';
import './Cart.css'

const Cart = ({ cart, children, clearCart }) => {


    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
    }
    let tax = parseFloat((total * 0.1).toFixed(2))
    const garndTotal = total + shipping + tax;
    return (
        <div>
            <p>Select item: {quantity}</p>
            <p>Total: ${total}</p>
            <p>Shipping Fee: ${shipping}</p>
            <p>Tax: {tax}</p>
            <p>Garnd Total: {garndTotal}</p>
            {/* <button onClick={clearCart} className='clear'>Clear cart</button> */}
            {children}
        </div>
    );
};

export default Cart;
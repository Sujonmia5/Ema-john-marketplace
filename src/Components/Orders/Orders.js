import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrdersDetails from '../OrdersDetails/OrdersDetails'
import { clearStorage, removeItem } from '../utilities/AddedStorage';
import './Orders.css'

const Orders = () => {
    const { initialCart } = useLoaderData();

    const [cart, setCart] = useState(initialCart);


    const handleDelete = (id) => {
        const remeningProduct = cart.filter(product => product.id !== id)
        setCart(remeningProduct)
        removeItem(id)

    }
    const clearCart = () => {
        clearStorage()
    }
    return (
        <div className='Shop'>
            <div className='order-card'>
                {
                    cart.map(product => <OrdersDetails handleDelete={handleDelete} product={product} key={product.id} />)
                }
                {
                    cart.length === 0 && <h1 className='empty'>Go to <Link to="/shop">Shop Now</Link></h1>
                }
            </div>
            <div className='cart'>
                <Cart cart={cart} clearCart={clearCart} >
                    <Link to='/shipping'>
                        <button className='btn'>Shipping</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
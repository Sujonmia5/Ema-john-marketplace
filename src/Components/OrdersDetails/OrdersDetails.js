import React from 'react';
import './OrdersDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const OrdersDetails = ({ product, handleDelete }) => {

    const { name, img, price, shipping, quantity, id } = product

    const totalPrice = price * quantity;

    return (
        <div className='order-cart'>
            <div className='img'>
                <img src={img} alt="" />
            </div>
            <div className='order-text'>
                <div className='text-div'>
                    <p className='name'>{name}</p>
                    <div className='price'>
                        <p><small>Price: <span>${totalPrice}</span></small></p>
                        <p><small>Shipping: <span>${shipping}</span></small></p>
                        <p><small>Quantity: <span>${quantity}</span></small></p>
                    </div>
                </div>
                <div className='btn-delete'>
                    <button onClick={() => handleDelete(id)}>
                        <FontAwesomeIcon className='trust' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrdersDetails;
import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStairs, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { product, handleButton } = props
    const { name, img, price, ratings, id } = product

    return (
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-body'>
                <h4>
                    {name}
                </h4>
                <p>Ratings: {ratings} <FontAwesomeIcon icon={faStarHalfAlt} /></p>
                <p>Price: ${price} </p>
                <button onClick={() => handleButton(product)} className='btn'> <FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;
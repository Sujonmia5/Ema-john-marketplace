import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product'
import { AddToDb, getStore } from '../utilities/AddedStorage';

import './Shop.css'


const Shop = () => {
    const [cart, setCart] = useState([])
    const { products } = useLoaderData()

    useEffect(() => {
        let saveData = []
        const data = getStore()
        for (const id in data) {
            const storeProduct = products.find(item => item.id === id)
            if (storeProduct) {
                const quantity = data[id]
                storeProduct.quantity = quantity;
                saveData.push(storeProduct)
            }
        }
        setCart(saveData)
    }, [products])

    const handleButton = (product) => {

        let newCart = []
        const exists = cart.find(item => item.id === product.id)
        if (!exists) {
            const quantity = product.quantity + 1
            product.quantity = quantity;
            newCart = [...cart, product]
        }
        else {
            const restProduct = cart.filter(item => item.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...restProduct, exists]
        }
        setCart(newCart)
        AddToDb(product.id)
    }

    return (
        <div className='Shop'>
            <div className='display-card'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleButton={handleButton}
                    />)
                }
            </div>
            <div className='cart'>
                <h1>Order Summary</h1>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
import { getStore } from "../Components/utilities/AddedStorage";

export const dataLoader = async () => {
    const productData = await fetch('products.json');
    const products = await productData.json();

    let initialCart = []
    const saveCart = getStore()
    for (const id in saveCart) {
        const addedProduct = products.find(product => product.id === id)
        if (addedProduct) {
            const quantity = saveCart[id]
            addedProduct.quantity = quantity
            initialCart.push(addedProduct)
        }
    }
    return { products, initialCart }
}
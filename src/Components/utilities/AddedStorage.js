const AddToDb = (id) => {
    let cart = getStore()

    const quantity = cart[id]
    if (quantity) {
        cart[id] = quantity + 1
    } else {
        cart[id] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}
const getStore = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart')
    if (storeCart) {
        cart = JSON.parse(storeCart)
    }
    return cart;
}
const removeItem = id => {
    const storeData = getStore()
    if (id in storeData) {
        delete storeData[id]
        localStorage.setItem('cart', JSON.stringify(storeData))
    }
}

export {
    AddToDb,
    getStore,
    removeItem
}
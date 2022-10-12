//? use local storage to manage data 
const addToDb = (id) => {
    let shoppingCart;
    //? get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }else{
        shoppingCart = {};
    }

    //? add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
        //? The in operator returns true if the specified property is in the specified object
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
        }
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}


export {addToDb , removeFromDb, deleteShoppingCart};
const addToDb = (id) => {
    let shoppingCart = {};
    //* get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    // else{
    //     shoppingCart = {};
    // }
            
    //* add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    
}
const removeFromDb = (id) => {
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart);
    if(storedCart){
        if(id in shoppingCart){ //? shopping cart er moddhe jodi idta thake
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}
export {addToDb, removeFromDb, deleteShoppingCart};
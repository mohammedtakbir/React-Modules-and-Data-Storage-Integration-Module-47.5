import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {name, price, _id} = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id);
    }
    // const addToCartToParameter = () => addToCart(_id);
    const removeFromCart = id => {
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <p><small>Id: {_id}</small></p>
            <h2>Buy this: {name}</h2>
            <h4>only for: {price}</h4>
            {/* <button onClick={addToCartToParameter}>Add to card</button> */}
            {/* <button onClick={() => addToCart(_id)}>Add to card: shortcut</button> */}
            <button onClick={() => addToCart(_id)}>Add to cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;
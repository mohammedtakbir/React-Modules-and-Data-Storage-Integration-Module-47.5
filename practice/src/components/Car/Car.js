import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/fakeDb';


const Car = (props) => {
    const {_id, name, price} = props.car;

    const addToCart = id => {
        addToDb(id)
    }
    const removeFromCart = (id) => {
        removeFromDb(id)
    }
    const deleteFromCart = () => {
        deleteShoppingCart()
    }
    return (
        <div style={{border: '2px solid coral', margin: '50px', padding: '10px', borderRadius: '5px'}}>
            <p>Id: <span>{_id}</span></p>
            <h2>{name}</h2>
            <h3>Price: ${price}K</h3>
            <button onClick={() => addToCart(_id)}>Add to cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
            <button onClick={() => deleteFromCart(_id)}>Delete</button>
        </div>
    );
};

export default Car;
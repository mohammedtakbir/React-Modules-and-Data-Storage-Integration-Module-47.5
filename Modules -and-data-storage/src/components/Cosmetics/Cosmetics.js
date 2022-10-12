import React, { useEffect, useState } from 'react';
import { getTotal } from '../../Utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../Utilities/calculate';
// import add from '../Utilities/calculate';
const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first, second)
    //? create fake data
    /* const cosmetics = [
        {id: 1, name: 'Alta', price: 100},
        {id: 2, name: 'Palis', price: 200},
        {id: 3, name: 'Malis', price: 300},
        {id: 4, name: 'balis', price: 400},
        {id: 5, name: 'nalis', price: 500},
    ] */
    //? JSON Generator
    // const cosmetics = [
    //     {
    //       "_id": "63304117491fb07af33a98f6",
    //       "price": 79,
    //       "name": "Estrada Mccall"
    //     },
    //     {
    //       "_id": "633041172b665bf2e962694c",
    //       "price": 534,
    //       "name": "Pearlie Mills"
    //     },
    //     {
    //       "_id": "633041173a6e0dec2ad5d726",
    //       "price": 374,
    //       "name": "Valarie Welch"
    //     },
    //     {
    //       "_id": "633041170c7d99579ba3e6aa",
    //       "price": 284,
    //       "name": "Abby Alford"
    //     },
    //     {
    //       "_id": "63304117d7c3765564206211",
    //       "price": 388,
    //       "name": "Richmond Sanford"
    //     },
    //     {
    //       "_id": "63304117f4cdaffe6ddee441",
    //       "price": 325,
    //       "name": "Stone Conway"
    //     },
    //     {
    //       "_id": "63304117806f236744fdc796",
    //       "price": 194,
    //       "name": "Maureen Contreras"
    //     }
    //   ]

    //? load data from public/data.json
    const [cosmetics, setCosmetics] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, []);

    const total = getTotal(cosmetics);


    return (
        <div>
            <h1>hello from the Cosmetics components</h1>
            <p>money needed: {total}</p>
            {/* <h2>{total}</h2> */}
            {
                cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic._id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;
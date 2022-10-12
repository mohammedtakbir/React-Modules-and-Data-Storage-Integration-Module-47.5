import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Car from '../Car/Car';

const Cars = () => {
    //? create fake data
    /* const cars = [
        {id: 1, name: 'Audi', price: 120},
        {id: 2, name: 'Porsche', price: 220},
        {id: 3, name: 'BMW', price: 170},
        {id: 4, name: 'RR', price: 200},
        {id: 5, name: 'Benz', price: 180},
    ]; */
    //? JSON Generator
    /* const cars = [
        {
          "_id": "63304117491fb07af33a98f6",
          "price": 79,
          "name": "Estrada Mccall"
        },
        {
          "_id": "633041172b665bf2e962694c",
          "price": 534,
          "name": "Pearlie Mills"
        },
        {
          "_id": "633041173a6e0dec2ad5d726",
          "price": 374,
          "name": "Valarie Welch"
        },
        {
          "_id": "633041170c7d99579ba3e6aa",
          "price": 284,
          "name": "Abby Alford"
        },
        {
          "_id": "63304117d7c3765564206211",
          "price": 388,
          "name": "Richmond Sanford"
        },
        {
          "_id": "63304117f4cdaffe6ddee441",
          "price": 325,
          "name": "Stone Conway"
        },
        {
          "_id": "63304117806f236744fdc796",
          "price": 194,
          "name": "Maureen Contreras"
        }
      ]; */
      //? load data from public/data.json
      const [cars, setCars] = useState([]);
      useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCars(data))
      }, []);
      const totalPrice = getTotal(cars)
    return (
        <div>
            <h1>this is cars components</h1>
            <h2>total price: ${totalPrice}K</h2>
            {
                cars.map(car => <Car car={car} key={car._id}></Car>)
            }
        </div>
    );
};

export default Cars;
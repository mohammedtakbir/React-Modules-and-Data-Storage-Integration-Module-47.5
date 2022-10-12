import React from 'react';
import { add, multiply } from '../../Utilities/calculate';

const Shoes = () => {
    const first = 69;
    const second = 6;
    const result = multiply(first, second);
    const sum = add(first, second)
    return (
        <div>
            <h1>this is from shoes components</h1>
            <h2>multiply: {result} and total: {sum}</h2>
        </div>
    );
};

export default Shoes;
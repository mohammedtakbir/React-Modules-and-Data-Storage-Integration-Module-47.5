const add = (first, second) => {
    return first + second;
}
const multiply = (first, second) => {
    return first * second;
}

// const numbers = [12, 34, 45, 67, 78, 98];
// const total = numbers.reduce((previous, current) => previous + current, 0)
/* const cosmetics = [
    {id: 1, name: 'Alta', price: 100},
    {id: 2, name: 'Palis', price: 200},
    {id: 3, name: 'Malis', price: 300},
    {id: 4, name: 'balis', price: 400},
    {id: 5, name: 'nalis', price: 500},
];
const total = cosmetics.reduce((previous, current) => previous + current.price,0); */

const getTotalPrice = products => {
    const total = products.reduce((previous, current) => previous + current.price, 0);
    return total;
}



//? object er shorthand er maddhome export korte hobe
export { add, multiply, getTotalPrice as getTotal};
const getTotalPrice = (products) => {
    const total = products.reduce((previous, current) => previous + current.price, 0);
    return total;
}
export {getTotalPrice as getTotal};
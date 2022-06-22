// Build a Manual Exponent Function in JavaScript
console.log("\nBuild a Manual Exponent Function in JavaScript");

const toThePowerOf = (num, exp) => {
    const items = Array(exp).fill(num);
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return items.reduce(reducer);
};

console.log(toThePowerOf(2, 3));
console.log(toThePowerOf(3, 3));
console.log(toThePowerOf(4, 2));
console.log(toThePowerOf(10, 10));
console.log(10 ** 10);
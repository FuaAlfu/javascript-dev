let num = 0;
let num_2;

//Assign a default if num is not set
const defaultPrice_1 = num || 100;
const defaultPrice_2 = num_2 || 50;

//------------------------------

//Assign a default if num is not set
const price_1 = num ?? 100;
const price_2 = num_2 ?? 50;

console.log(defaultPrice_1);
console.log(defaultPrice_2);
console.log('---');
console.log(price_1);
console.log(price_2);
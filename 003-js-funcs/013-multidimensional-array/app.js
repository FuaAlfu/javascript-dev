let address = [];

let cities = [
    ['New York', 3],
    ['London',8],
    ['Tokyo',1],
    ['Munich',5]
];

console.table(cities);
console.log(cities[0][1]);

cities.push(['Kiev',11]);
cities.push(['Dubai',7]);
console.table(cities);

//range over
const rangeOver = (array) => {
array.forEach((arr) => {
    let percentage = ((arr[1]/24) * 100).toFixed();
    arr[2] = percentage + '%';
});
console.table(array);
}
rangeOver(cities);
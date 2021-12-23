const array = [
    [11,22,33],
    [44,55,66]
];

const reverse = (item) => {
    let returnForReal = new Array;
    for(let i = item.length - 1; i >= 0; i--){
        returnForReal.push(item[i]);
    }
    return returnForReal;
}
console.log(reverse(array));
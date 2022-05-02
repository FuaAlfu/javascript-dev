const array = [71,5,23,42]

//#region 
//#1
console.log(Math.max(...array));

//#2
const maxNumber = array.reduce(function(a, b){
    return Math.max(a,b);
},0);
console.log(maxNumber);

//#3
const returnLargest = (number) =>{
    return Math.max.apply(null, number)
}
console.log(returnLargest(array));

//#4
const largest = (number) => {
    let max = -Infinity, i = 0, n = array.length;
    for(; i != n; ++i){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max;
}
console.log(largest(array));
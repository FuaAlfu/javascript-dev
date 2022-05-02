const myArray:number[] = [99,1,73,7,101,1000,626,15,68];
let myMap = new Map<string, number>();



var myNumbers:number[];
myArray.forEach(function (item){
    myArray.push(item);
});

console.log(myArray);
//-------------------
myMap.set("fua",30);
myMap.set("mua",27);


console.log(myMap);
console.log('====================================');
console.log(myMap.has("fua"));
console.log('====================================');
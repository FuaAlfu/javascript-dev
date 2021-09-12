const arrangeNumbers = (myArray) => {

for(let item of myArray){
    setTimeout(() => console.log(item), item);
}
}

const myArray = [99,1,73,7,101,1000,626,15,68];
console.log(arrangeNumbers(myArray));



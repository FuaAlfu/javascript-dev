const factorial = (x) => {
    if(x == 0){
        return 1
    }else{
        //for positive number
        return x * factorial(x - 1)
    }
}

console.log(factorial(100));
console.log(factorial(50));
let s:string = "test";
console.log(s);

const smallestDivisor = (number: number) => {
    const iter = (args: number) => {
        if(args > number / 2){
            console.log(number);
        }
        if(number % args === 0){
            console.log(args);
        }
        console.log(iter(args + 1)); 
    }
    return iter(2);
};

smallestDivisor(30);

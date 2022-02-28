/*

*/

let a:number = 50
let b:number = 100
let c:string
let d = (a > b ? 'a is greater than b' : 'a is less than b');

const check = (a:number, b:number) => {
if (a > b ) {
    c='a value: is greater than b value'
} else {
    c='a value: is not greater than b value'
}
console.log(c)
}

const checkAgain = (a:number, b:number) => {
    switch(a > b) { 
        case a > b: { 
            console.log(c='a value: is greater than b value' );
           break; 
        } 
        case a < b: { 
            console.log(c='a value: is less b value' );
           break; 
        } 
        default: { 
            console.log(c='a value: is equal b value'); 
           break; 
        } 
     } 
}

check(a,b);
checkAgain(a,b)
console.log(d);


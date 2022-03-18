let s:string = "typescript";

function reverseString(s:string){
    return s.split("").reverse().join("");  
}

function reverseAgain(s:string){

let charArray: string[] = s.split('');
console.log(charArray);

let reverseArray: string[] = charArray.reverse();
console.log(reverseArray);

let reversedArray: string = reverseArray.join('');
console.log(reversedArray);
}

console.log(reverseString(s));
console.log('----'); 
reverseAgain(s)

let myArray:number[] = [66,99,871,87,5,12,70,32,400,91];

const test = (a:number[]) =>{
    for(let i = 0; i < a.length; i++){
        console.log(a.pop());
    }
    console.log(a);
}

//---

const testTwo = (a:number[]) =>{
    for(let i = 0; i < a.length; i++){
        console.log(a.unshift());
    }
    console.log(a);
}

//---

const testThree = (a:number[]) =>{
    for(let i = 0; i < a.length; i++){
        console.log(a.shift());
    }
    console.log(a);
}

//---

const testLast = (a:number[]) => {
    for(let i = 0; i < a.length; i++){
        console.log(a.push(a[i]));
    }
    console.log(a);
}

test(myArray);
console.log('===');
testTwo(myArray);
console.log('===');
testThree(myArray);
console.log('===');
//testLast(myArray);
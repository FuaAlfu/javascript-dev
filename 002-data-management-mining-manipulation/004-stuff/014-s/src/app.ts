type Aliase = string | number;

let myArray : any[]=[1,"one"];
myArray.push("two");
myArray.push(2)

let obj = {
    name: "",
    age: "",
}

let obj2 = {
    address: "",
    score: "",
}

obj = {name:"ahmed", age:"22"}
obj2 = {address:"445654", score:"1500"}
let obj3 = {...obj,...obj2}
const s = (prams:any) =>{
    return prams;
}

// const a = (prams:Aliase, prams2: Aliase) =>{
//     return {...prams,  prams2};
// }

const str = (prams:string, prams2: string) =>{
    return prams.concat(prams2).length;
}

console.log('====');
console.log(s("yo"));
console.log(str("yo","bb"));
console.log(obj3);

//console.log(a(1));
console.log(myArray)

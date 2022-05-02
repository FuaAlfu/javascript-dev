let myArray = [];
let myAnotherArray = [];

myArray.push('one','two','three','four');
console.log(myArray);

myAnotherArray.push(111,83,555,98,69,4);
console.log(myAnotherArray);

//--------------
const lookFor = (arg) => {
    arg.forEach((item) => {
        console.log(item);
    })
}
lookFor(myArray);

const lookFor2 = (arg) => {
    //i: index, v: value
    arg.forEach((i,v) => {
        console.log('%d: %s', i, v);
    })
}
lookFor2(myAnotherArray)
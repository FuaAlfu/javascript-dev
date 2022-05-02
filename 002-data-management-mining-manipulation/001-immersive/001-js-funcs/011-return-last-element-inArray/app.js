const array = [71,5,23,42]

//#region 
//#1
console.log(array.slice(-1)[0]);

//#2 return size
const returnLastSize = (element) => {
    console.log(element.length -1);
}
returnLastSize(array)

//#3 return element
const returnLastElement = (element) => {
    let last = element[element.length-1];
    console.log(last);
}
returnLastElement(array)
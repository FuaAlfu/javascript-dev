const array = [71,5,23,42]

//#region 
//#1
let mid = array[Math.round((array.length - 1) / 2)];
console.log(mid);

//#2
const middle = (mid) => {
    let middleElement = Math.floor(mid.length / 2);
    let result = mid[middleElement];
    console.log(result); 
}
middle(array);

//#3
function middleElement(mid){
    let middleIndex = parseInt((mid.length / 2).toFixed(),10) - 1;
    if(middleIndex === -1){
        console.log("array is null ");
    }
    else{
        console.log(`middle index in array ${mid} is: ${mid[middleIndex]}`);
    }
}
middleElement(array);
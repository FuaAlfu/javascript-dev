const array = [71,5,23,42]

//#region 
//#1
const min = Math.min(...array)
console.log(min)

//#2
const minNumber = array.reduce((a, b) => Math.min(a, b))
console.log(minNumber)

//#3
function returnLowest(){
    let minValue = array[0];
    for (var i = 0; i < array.length; i++) {
        if(array[i]<minValue)
        {
            minValue = array[i];
        }
    
    }
      console.log(minValue);
}
returnLowest();
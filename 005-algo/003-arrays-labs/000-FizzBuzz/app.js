let output = [];
let count = 1;
const myCounting = 30;
output.push(1)
console.log(output);
output.pop()
console.log(output);
console.log("---");

const fizzBuzz = () =>{
   // output.push(count)
   for(let i = 0; i < myCounting; i++){
    if(count % 3 == 0 && count % 5 == 0){
        output.push("fizzBuzz")
    }
    else if(count % 3 == 0){
        output.push("fuzz");
    }
    else if(count % 5 == 0){
        output.push("buzz");
    }
    else{
        output.push(count);
    }
    count++
   }
   console.log(output);
}
fizzBuzz()
console.log("--");
/*
fizzBuzz()
fizzBuzz()

*/

function fizzBuzzS(){
    for(let i = 0; i < myCounting; i++){
        switch(count) {
              case count % 3 == 0 && count % 5 == 0:
                output.push("fizzBuzz")
                break;
              case count % 3 == 0:
                output.push("fuzz");
                break;
              case count % 5 == 0:
                 output.push("buzz");
                break;
              default:
                output.push(count);
        }
        count++
    }
    console.log(output);
}
fizzBuzzS()
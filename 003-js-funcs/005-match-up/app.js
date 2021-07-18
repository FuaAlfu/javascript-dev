let gold = [11,22,33,44];
let silver = [9,8,7,6]

const matchUp = (arr,match) =>{
    for(let item of arr){
        if(item === match){
            return true;
        }
    }
    return false;
}

console.log(`gold: ${matchUp(gold,33)}`);
console.log(`gold: ${matchUp(gold,55)}`);
console.log(`silver: ${matchUp(silver,7)}`);
console.log(`silver: ${matchUp(silver,4)}`);
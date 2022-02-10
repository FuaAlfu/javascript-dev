"use strict";
let myArray = [99, 1, 73, 7, 100, 1000, 626, 15, 68];
function sum(list) {
    if (list.length > 0) {
        const element = list.pop();
        const s = sum(list);
        return s + element;
    }
    else {
        return 0;
    }
}
console.log(sum(myArray));

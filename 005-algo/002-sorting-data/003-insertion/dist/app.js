"use strict";
function insertion(array, cmp = (a, b) => a - b) {
    let current;
    let j;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && cmp(array[j], current) > 0) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = current;
    }
    return array;
}
let arr = [44, 1, 89, 555, 21, 5, 34, 1];
console.log(insertion(arr));

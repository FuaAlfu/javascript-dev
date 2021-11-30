"use strict";
function shellSort(array, gaps) {
    for (var g = 0; g < gaps.length; g++) {
        var gap = gaps[g];
        for (var i = gap; i < array.length; i++) {
            var temp = array[i];
            for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                array[j] = array[j - gap];
            }
            array[j] = temp;
        }
    }
    return array;
}
let arr = [44, 1, 89, 555, 21, 5, 34, 1];
console.log(shellSort(arr, arr));

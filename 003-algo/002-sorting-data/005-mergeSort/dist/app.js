"use strict";
function mergeSort(input) {
    if (input.length <= 1) {
        return input;
    }
    const listA = input.slice(0, Math.ceil(input.length / 2));
    const listB = input.slice(listA.length, input.length);
    return sortedMerge(mergeSort(listA), mergeSort(listB));
}
function sortedMerge(listA, listB) {
    const merged = [];
    while (listA.length && listB.length) {
        if (listA[0] <= listB[0])
            merged.push(listA.shift());
        else
            merged.push(listB.shift());
    }
    while (listA.length > 0)
        merged.push(listA.shift());
    while (listB.length > 0)
        merged.push(listB.shift());
    return merged;
}
let arr = [44, 1, 89, 555, 21, 5, 34, 1];
console.log(mergeSort(arr));

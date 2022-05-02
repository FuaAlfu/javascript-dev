let s = [];
s.push("gold","silver","bronze");

const rangeOver = (array) => {
    for(let i = 0; i < array.length; i++){
        console.log(`index: ${i}, element: ${array[i]}`);
    }
}

rangeOver(s);
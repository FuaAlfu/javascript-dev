"use strict";
const limit = 10;
function looping(limit) {
    var count = 0;
    for (let i = 0; i < limit; i += 1) {
        count++;
        i % 2 == 0 ? console.log('**') : console.log('*');
        for (let j = 0; j < limit; j++) {
            j % 2 == 0 ? console.log('You') : console.log('him');
        }
        console.log(`count: ${count}`);
    }
}
looping(limit);

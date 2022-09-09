"use strict";
const record = {
    name: 'john',
    age: 29,
    address: 'XXX.XXX',
    speak1: (content) => console.log(content),
    speak2(content) {
        console.log(content);
    },
};
console.log(record);
console.log(record.speak1(`My name is ${record.name}`));
console.log(record.speak2(`I am ${record.age} years old`));

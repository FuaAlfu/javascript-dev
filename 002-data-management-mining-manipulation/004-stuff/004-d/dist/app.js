"use strict";
const people = ["john", "doe", "fue", "mua", "nata"];
let names = [];
names.push("cloud", "nosia");
for (const person of people) {
    console.log(person);
}
console.log("---");
names.forEach((name, index) => {
    console.log(`${index}: ${name}..`);
});

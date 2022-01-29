//initialize by square bracket
const people: string[] = ["john","doe","fue","mua","nata"];

//initialize by generic notation
let names: Array<string> = [];
names.push("cloud","nosia");

for(const person of people){
    console.log(person);
}
console.log("---");

names.forEach((name, index) => {
    console.log(`${index}: ${name}..`);
})

let people = [];
people.push("john","doe","ada","lion","um..")

const lastElement = people[people.length - 1];
const lastElement2 = people.at(-1);
console.log(lastElement);
console.log(lastElement2);

//-----------
const person = "nancy"
if(person === "ada" || person === "john" || person === "nancy"){
    console.log(`hello ${person}`);
}

if(["ada","john","nancy"].includes(person)){
    console.log(`hello ${person}`);
}
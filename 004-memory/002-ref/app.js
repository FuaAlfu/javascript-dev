const person = {
    age: 13,
    name: 'john'
}
console.log(person);

const person2 = person;
person2.name = 'doe'
console.log(person2);

const person3 = {...person}
person3.age = 12;
person3.name = 'nohobino';
console.log(person3);
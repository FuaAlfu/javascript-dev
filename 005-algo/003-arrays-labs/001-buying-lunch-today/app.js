let people = [];

people.push("ben","saly","john","lua","rick");
console.log(people);
console.log("--");

console.log(`${people[1]} is going to buy the lunch for today`);
//-----------------------------------

const whosPaying = (names) => {
    let numberOfPeople = names.length //size of an array
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople) //0 - 4.99 with floor will be 4
    let randomPerson = names[randomPersonPosition]

    return randomPerson + " is going to buy lunch today"
}
console.log(whosPaying(people));
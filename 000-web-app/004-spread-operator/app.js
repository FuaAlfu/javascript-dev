const js = 'javascript';
let letters = [...js];

const boys = ['denis', 'alex', 'john'];
const girls = ['natasha', 'anna', 'norah'];
const bestFriend = 'hoha';
const friends = [...boys,bestFriend,...girls];

//reference
//const newFriends = friends; //it will effect the friends array as well
const newFriends = [...friends];
newFriends[0] = 'nancy';

//objects
const person = {name: 'mua', job:'painter'};
const newPerson = {...person,city:'Tokyo',name:'fua'};

console.log(letters);
console.log(friends);
console.log(newFriends);
console.log(person);
console.log(newPerson);
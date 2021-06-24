let john = {
    first: 'john',
    last: 'doe',
    city: 'london',
    siblings: {
        brother: 'bil',
        sister:  'nata',
    },
};

//alias :: last:alias
const last = 'some value'
const {last:obs, first, city, zipCode, siblings:{brother:favoriteSibling}} = john;
console.log(first, city, zipCode,obs,favoriteSibling);

const print = (person) =>{
    const {first,last} = person
    console.log(first,last);
}

//destructuring :: used well in react Props & components
const printAgain = ({first,last,city,siblings:{brother,sister}}) =>{
    console.log(first,last,city,brother,sister);
}

print(john)
printAgain(john)

//old but gold
// const firstName = john.first;
// const lastName = john.last;
// const brother = john.siblings.brother;
// const sister = john.siblings.sister;

// console.log(firstName,lastName,brother,sister);
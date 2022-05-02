let print = 4 + '4'
console.log(print);

print = ('b'+'a'+'a'+'b').toLowerCase();
console.log(print);

print = print
console.log(print);

print = ('b'+'a'+'a'+'b').toUpperCase();
console.log(print);

print = [];
print.push([22,44,66,88]);
console.log(print);

let add = [8,4,2]
print.push(...add)
console.log(print);

const func = (arg) => {
    for(var item in arg){
        console.log(`${arg}: ${arg[item]}`);
    }
}
func(print)
/*
this code will fill up our memory until there is nothing
left to use and our browser will eventually crash
*/

//Creating a memory Leak
let array = [];
for(let i = 0; i > 1; i++){
    array.push(i-1);
}
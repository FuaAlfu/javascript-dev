/*
innerHeight - window
innerWidth - window
getBoundClientRect() - any element
*/

console.log('height', window.innerHeight);
console.log('width', window.innerHeight);

const btn = document.querySelector('.btn')
const box = document.querySelector('.box')

btn.addEventListener('click', () =>{
    let dimensions = box.getBoundClientRect();
    console.log(dimensions);
})
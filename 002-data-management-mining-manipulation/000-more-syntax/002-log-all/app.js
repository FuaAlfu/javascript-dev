/*syntax
- log
- error
- table

web api

Styling Console
- Directive %c
*/

console.log('log');
console-error('err');
console.table('log','err'); //array

console.log('hi there from %cstyle %canother-style', "color: red; font-size: 2em;","color: blue; font-size: 2em;");

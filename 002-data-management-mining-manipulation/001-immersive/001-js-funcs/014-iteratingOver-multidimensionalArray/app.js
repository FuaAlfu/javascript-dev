let games = [
    ['god of war', 7],
    ['devil may cry',2],
    ['dark souls',6],
    ['dragon quest',1]
];

console.table(games);

const it = (arr) => {
    for(let i = 0; i < arr.length; i++){
        var innerArrayLength = arr[i].length;
        for(let j = 0; j <  innerArrayLength; j++){
            console.log('[' + i +','+ j + '] = ' + arr[i][j]);
        }
    }
}
it(games);
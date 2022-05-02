let myArray:number[] = [99,1,73,7,100,1000,626,15,68];

function sum(list: number[]): number {
    if (list.length > 0) {
        const element: number = list.pop()!;
        const s = sum(list);
        return s + element;
    } else {
        return 0;
    }
}

console.log(sum(myArray));
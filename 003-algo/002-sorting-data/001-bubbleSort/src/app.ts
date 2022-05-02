function randomArrayGenerator(arrayLength: number){
    return [...Array(arrayLength)].map(() => 
        Math.floor(Math.random() * (100 * arrayLength)
        ));
}

function bubbleSort(array: number[]){
    const copyArray = [...array];
    const {length} = copyArray;

    const swap = (a: number, b: number): void =>{
        copyArray[a] = copyArray[a] + copyArray[b];
        copyArray[b] = copyArray[a] - copyArray[b];
        copyArray[a] = copyArray[a] - copyArray[b];
    };

    for(let x = 0; x < length - 1; x++)
    for(let y = 0; y < length - 1 - x; y++){
        const [currentIndex, nextIndex] = [y,y + 1];
        if(copyArray[currentIndex] > copyArray[nextIndex])
        swap(currentIndex,nextIndex);
    }
    return copyArray;
}

console.log(bubbleSort(randomArrayGenerator(30)));

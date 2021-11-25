function sort(array: number[]){
        
        for(let x = 0; x < array.length - 1; x++){
            let min = x;
            for(let y = x + 1; y < array.length; y++){
                if(array[y] < array[min]){
                    //pick up the less
                    min = y;
                }
            }
            const temp = array[min];
            array[min] = array[x];
            array[x] = temp;
        }
        return array;
    }

    let arr = [44,1,89,555,21,5,34,1]
    console.log(sort(arr));
    
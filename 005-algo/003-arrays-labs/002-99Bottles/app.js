let bottles = [];
const singleBottle = 1;

const add = (item) => {
    var i = 1;
    while(i < 99){
        item.push("Bottle")
        i++
        if(i > 99){
            break;
        }
    }
    console.log(item);
}
add(bottles)
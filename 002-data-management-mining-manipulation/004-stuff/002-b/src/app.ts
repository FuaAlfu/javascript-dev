type StringOrNumber = string | number;
type objWithName = {name: string, uid: StringOrNumber};
type person = {name:string,age:number};
//--------------------------------------------------------------

const logDetails = (uid: StringOrNumber, item: string) =>{
    console.log(`${item} has uid of ${uid}`);
}
logDetails(30,'fua');


const greet = (userName: string,userAge:number) =>{
    console.log(`${userName} says yo, ${userAge}`);
}
greet("loe",12);

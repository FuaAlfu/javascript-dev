const generatPass = () => {
    const digits:string = "0123456789";
    let p = "";
    for(let i = 0; i < 7; i++){
        p += digits[Math.floor(Math.random() * 10)];
    }
    return p;
} 

console.log(generatPass());
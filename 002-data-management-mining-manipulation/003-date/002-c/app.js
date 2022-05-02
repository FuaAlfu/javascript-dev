const getCurrentDay = () =>{
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
    return `Today is ${days.find((_,index) => index === new Date().getDay())}`
}


console.log(getCurrentDay());
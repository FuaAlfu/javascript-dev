export function generateAnotherRandomNumbers(limit:number):number{
    let minNumber:number = 0;
	const min = Math.ceil(minNumber);
	const limitA = Math.floor(limit);
	return Math.floor(Math.random() * (limitA - min + 1)) + min; 
}



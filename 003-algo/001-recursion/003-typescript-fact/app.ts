class Factorial{
    static factorial: number;
    factorial = 1;

    constructor(){}
    factorialFunc(number: number): number{
        if(number > 0){
            this.factorial = this.factorial * number;
            this.factorialFunc(number - 1);
        }
        return this.factorial;
    }
    
}
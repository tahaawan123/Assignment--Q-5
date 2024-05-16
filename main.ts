// 3.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.

//  make two variables containing number values.
let num1 : number = 40;
let num2 : number = 30;
// • make a variable to hold an operator (-).

let operator: string= "-";

// • Create a function that takes two numbers and an operator as parameters,
function calculate(num1:number,num2:number,operator:string){

   if(operator === "-"){
        return(num1 - num2);
        
   }else if (operator === "+"){
    return(num1 + num2);
    
   }else{
         return (`invalid`)
   }
};
// • Call the function with the variables and operator
let result = calculate(num1,num2,operator);
console.log(result);
//  Update the operator value and call the function again with the updated arguments.
let update = calculate(num1,num2,"+");
console.log(update);




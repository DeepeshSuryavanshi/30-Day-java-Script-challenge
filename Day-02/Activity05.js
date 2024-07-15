// Ternery operator 

// Task 14 : write a Program that uses the ternery operator to check if the number is possitive  or negitive.
// and log the result to the console

function CheckNumber(number){
    return number >= 0 ? "Positive number" : " Negitive Number"
}

let num1 = -10
let num2 = 10

console.log("Checking number num 1:",num1 ,CheckNumber(num1));
console.log("Checking number num 2:",num2 ,CheckNumber(num2));
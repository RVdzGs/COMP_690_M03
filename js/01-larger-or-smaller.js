/*Larger or Smaller?

Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.
*/

// Using prompt() to ask the user for two numbers.
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

// Comparison and validation of the if statements.
if (!isNaN(num1) && !isNaN(num2)) {
    if (num1 > num2) {
        document.write(`<h1>The larger number is: ${num1}<\h1>`);
    } else if (num2 > num1) {
        document.write(`<h1>The larger number is: ${num2}<\h1>`);
    } else {
        document.write(`<h1>The numbers are equal<\h1>`);
    }
}
else {
    document.write("<h1>Invalid input. Please enter valid numbers.</h1>");
} 
/*
The “Grade Assigner” Application

Usage: Use else if or switch statements

Collect the a number between 1 and 100 from the user.
Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.
*/


let grade = parseInt(prompt('Enter the student\'s grade (between 1 and 100):'));

if (grade < 1 || grade > 100) {
    document.write('Only numbers between 1 and 100 are accepted.');
} else if (grade >= 90 && grade <= 100) {
    document.write('You received an <strong>A</strong>');
} else if (grade >= 80 && grade <= 89) {
    document.write('You received a <strong>B</strong>');
} else if (grade >= 70 && grade <= 79) {
    document.write('You received a <strong>c</strong>');
} else if (grade >= 60 && grade <= 69) {
    document.write('You received a <strong>D</strong>');
} else {
    document.write('You received an <strong>F</strong>');
}

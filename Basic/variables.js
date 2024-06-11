// declare variables using let
let name = 'Morris';
// console.log(name);

// What of constants??
const interestRate = 0.3;
// console.log(interestRate);

// Types of variables
// Primitive type vs Reference type
// Primitive type
let firstName = 'Mosh';     // String Literal
let age = 30;               // Number Literal
let isApproved = false;     // Boolean Literal
let other = undefined;      // undefined
let thing = null;           // clear the value of variable

// Reference Types
//  Object, Array, and Function
let personObject = {
    name: 'Morris',
    age: 30
};

// Dot Notation
personObject.name = 'Muriithi';

// Bracket Notation
personObject['age'] = 40;

// console.log(personObject);

// ARRAYS
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';

console.log(selectedColors);
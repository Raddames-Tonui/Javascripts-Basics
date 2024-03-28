                // DATATYPES - TYPES primitive and objects
// Everything in JavaScript is data except:

// Operators: +, !, <=, etc.
// Reserved words: function, for, debugger, etc.

// primitive Numbers,  strings, booleans, symbols, null and undefined
// objects- objects

let fname ="Raddames"; 
console.log(typeof fname ); //string
console.log(`My name is ${fname} and I'm `) // use backticks `` to use ${ } to display in terminal. can also use + to concatenate

let age =24; //number
console.log(typeof age);

let hex = 0xf; //number
console.log(typeof hex);
console.log(hex); //display hexadecimal but as a number

let married =true //Boolean
console.log(typeof married); //boolean
// All values in Javascript, of any data type (String, Number, etc.), are treated as either truthy or falsey. 
// falsey include false, null, undefined, NaN, 0
console.log(Boolean(married));

let num1 = 5/0 //infinity
console.log(typeof num1 );

let num2 = -5/0 //-ve infinity
console.log(num2); // -infinity

console.log(num1 + num2);

let num3 =1050505050050050505051
console.log(num3); //cuts the values


const fruits =["mangoes", "Oranges", "apples", "avocadoes"]; //objects 
console.log(typeof fruits);

let num4 = 1050505050050050505051n //to display all the number in terminal add n at the end
console.log(num4); //displays all values
// console.log(num4 +2); // gives an error TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(num4 +2n); //to correct the addition of Big int and int like above

let num5; // undefined Any variable declared but not defined will be undefined until a value is assigned.
console.log(num5)

// Symbols
// Symbols are a relatively new data type (introduced in ES2015) that's primarily used as an alternative way to add properties to objects. Don't worry about symbols for now.


 












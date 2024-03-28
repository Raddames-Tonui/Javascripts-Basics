// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function Map(arr){
    return arr.map(value => value * 2);
    
} 
let input =[1,2,3,4,5];
let output = Map(input);

console.log(output);

function students(fname, number){
    console.log("hello"+ fname +"!" );
    number()
    
}
function callback(){
    console.log("You are 20 years old");
}

students("Raddames", callback)

// function greeting(hello, callback){
//     console.log("Hello "+ name + );
//     callback()
// }
// function hello(){
//     console.log("goodevening");
// }
// greeting("joyce", goodbye)
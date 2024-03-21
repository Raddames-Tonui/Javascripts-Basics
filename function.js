const age =30;
let isadult = age >= 18;
console.log(isadult);
    
const h=58;
let istall ;
h >=60 ? (istall = true) : (istall =false);

console.log(istall);

            // FUNCTION
function sayhello(){
    console.log("hello Raddames")
}
sayhello()  // Function calling

        // ARGUMENTS
  // Arguments give us a way to pass information into a function to make our functions more flexible.
//    We pass the argument at the time that we call the function, 
//    by including it inside the parentheses after the name of the function:
function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("print anything"); // passing the argument 'anything' into our function

  firstName = ["Guadalupe", "Jane"," Raddames","Tonui"]
  function sayHelloTo(firstName) // A parameter is a placeholder that stores whatever value gets passed in as an argument.
   {
    console.log(`Hello, ${firstName}!`);
  }
 console.log(firstName); // this will print out everyone in the array
 console.log(firstName[2]) // This will access the second person in the array
  
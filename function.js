
            // FUNCTION  is an object that contains a sequence of JavaScript statements. We can execute or call it multiple times.
           //  https://player.vimeo.com/video/546183787?title=0&byline=0&portrait=0
function sayHello(){
  console.log("Hello world")
}

sayHello() // Function calling

      //using VARIABLE to declare function eg hiRadde
      //NOTE : Hoisting - inability to call a function
 
const hiRadde = function(){  
        console.log("Hi raddames");
 }
//  hiRadde();

      //PARAMETERS  eg name
function sayHi(name){
  console.log("Hello " + name);
}
 sayHi("Raddames");

        // ARGUMENTS
   // Arguments give us a way to pass information into a function to make our functions more flexible.
  //    We pass the argument at the time that we call the function, 
 //    by including it inside the parentheses after the name of the function:
//  passing the argument 'anything' into our function


  firstName = ["Guadalupe", "Jane"," Raddames","Tonui"]
  let array1 = sayHi(firstName)
console.log(array1); // Hello Guadalupe,Jane, Raddames,Tonui


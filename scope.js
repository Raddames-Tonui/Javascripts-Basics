// const myDog = "Jimmy";
// console.log(`Global : ${myDog}`);

// function isFierce(){
//     let size = 53
//         console.log(`Functional & global : ${myDog}`)
//         console.log(`Functional: ${size}`);

//     if (myDog === "Jimmy") {
//         let age = 9;

//         console.log(`block: ${myDog}`);
        
//     }
// }
// isFierce()



const myVar = "Foo";

function second() {
  function first() {
    console.log("Inside first()");

    console.log("myVar is currently equal to:", myVar);
  }

  const myVar = "Bar";

  first();
}

console.log(second());
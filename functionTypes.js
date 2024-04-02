// ------------------------------------------------------------------------------------------------
                                // a) NAMED FUNCTIONS
// ------------------------------------------------------------------------------------------------      
function nameOfFunction(){
    console.log("This is a named function")
}
nameOfFunction()



// ------------------------------------------------------------------------------------------------
                                // b) ARROW FUNCTIONS
// ------------------------------------------------------------------------------------------------

let books = () => console.log("Hello world");
books()

let addition = (a,b) => a + b
let summ = addition(8,9)
console.log(summ);

// ------------------------------------------------------------------------------------------------
                                // c) CALLBACK FUNCTIONS
// ------------------------------------------------------------------------------------------------

    function mycallback(a,b){
         return a + b;
    } 
    const sum = mycallback(6,7);     // Call mycallback with arguments 6 and 7
    console.log(sum);

// ------------------------------------------------------------------------------------------------

    function namedfunc() {
        return function add() {
            return console.log("Hello");
        };
    }
    
    const returnedFunction = namedfunc(); // Call namedfunc to get the add function
    returnedFunction(); //Call the returned add function Output: Hello

// ------------------------------------------------------------------------------------------------

function arrowfun() {
    return () => console.log("returning unnamed arrow function");
}

const returnarrownfun = arrowfun();// Call arrowfun to get the unnamed arrow function

returnarrownfun(); // Call the returned arrow function to see its behavior Output: returning unnamed arrow function

// ------------------------------------------------------------------------------------------------
                            // d) HIGHER ORDER FUNCTION
// ------------------------------------------------------------------------------------------------

function add(a, b) {
    return a + b;
}

function callBackAdd(callback, a, b) {
    return callback(a, b); // Pass a and b as separate arguments to the callback
}

const output = callBackAdd(add, 5, 6);
console.log(output); // Output: 11
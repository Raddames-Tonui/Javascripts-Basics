        // ! NOT  Negates true to false and false to true
// const truthyValue = 'This is a truthy';
// let falseyValue = 0;

// console.log(Boolean(truthyValue));   //returns true
// console.log(!truthyValue);          //returns a false
// console.log(Boolean(falseyValue));  //returns a false
// console.log(!falseyValue); //returns a truthy
// console.log(!!truthyValue) //RETURNS true
// console.log(!!!!!!falseyValue);  //false 

        // && AND
            // T && F  = F
            // F && T  = F
            // T && T  = T
console.log(Boolean(0 && false)); //F

console.log(Boolean( 0 && true)); //F
        
console.log(Boolean(true && NaN)); // F
        
console.log(Boolean(true && !1)); // F
        
console.log(Boolean(!0 && "This is a string")); // T
        
console.log(Boolean( !0 && " ")); //T
        
console.log(Boolean(!0 && !!" ")); // T

console.log(false && "anything");// F

        // || OR
        // T || F = T
        // F || T = T
        // T || T = T
// console.log(Boolean( true || false)); 
;
console.log(Boolean(0 || false));  // F

console.log(Boolean(true || false)); //T


console.log(Boolean(true || 1)); //T

console.log(Boolean(!true || !false)); // T

console.log(Boolean(!1 || !0)); // T
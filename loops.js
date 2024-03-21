// LOOPS

// for
// while 
// do while
// for of loops through values
// for in loops through properties

            // FOR
for (let i=1;  i<10; i++)
{
    // code for checking all even values replace with i%2 !== 0 to check odd values
    if(i%2 ===0)
    {
        console.log("i will be " + i);
    }
    
}

        // WHILE LOOP
        // true will execute
// let x = 1;
// while(x > 0){
//     console.log(x);
//     x++;
// }
        // A false will not execute
// let x = null;
// while(x =null){
//     console.log(x);
//     x++;
// }

        //  Terminating while loop
let b = 10;
while (b >=10 && b <= 40)
{
    console.log("b will be" + b);
    b += 5;  // this will terminate infinity loop
}

        // DO WHILE => The do...while loop is similar to while, in that it will execute a block of code based on a condition or set of conditions. The difference, however, is that it will always execute at least once. The reason is that the condition isn't evaluated until after the code block executes the first time:
        // eg making a passowrd
 let count = 1;
 do {
    console.log("count will be "+ count);
    count += 2;

 } while (count <= 5);
    

// password = false
// do {
// console.log("Enter a Password!");
// } while(password = true )

        // FOR OF => printing indivual items for array
// let fruits =["mangoes","apples","oranges"]
//     // displaying everything in an Array
// console.log(fruits);
//     // displaying an  individual
// for (let fruit of fruits)
// {
//     console.log(fruits[0])
// }


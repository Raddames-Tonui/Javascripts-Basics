
// this a comment
// operators arithmetic + - * /
// comparison == equality  ===strict equality  != inequality !== strict inequality <= >=



 console.log("Hello world"); 

//  VARIABLES - let const var
let f_name = "Raddames";  //string
let l_name = "Tonui";
let age = 40;  // number
const school = "Moringa";

console.log("My name is "+ f_name );

// concatenation 
console.log(f_name +" "+ l_name);
console.log("my name is "+ f_name +" "+ l_name +" and I am " + age +" and I am in "+ school );

// DATATYPES - string, number, boolean, undefined, null, , symbols, objects
// primitive & objects
// let fruits = [" oranges" , "mangoes", "pineapple" , "quavas"]  // objects
let fruit = "apple";
console.log(typeof fruit);
console.log(typeof age);

let ismarried = true;  //boolean
let children =false;
console.log(typeof ismarried);
console.log(Boolean(ismarried)); //boolean();
console.log(Boolean(children));
console.log("My name is "+ f_name +" "+ l_name +" and I am " + age +" MY Marriage is " + ismarried + " and children " + children  );


   
// LOGICS 
//   ! NOT -negate a statement 

let ischild = false;
console.log(!ischild)
// && AND
// Truth table
// T + T =  T
// T +  F =  F
// F +  F = F
// F + T = F

// //  || OR
// T + T =T
// T + F = T
// F +T =  T
// F +F = F

const truthyValue = 'This is a truthy';
let falseyValue = undefined;

console.log(Boolean(!0 && "false"));

//CONDITONAL STATEMENTS
age = 10;

if ( age <= 18)
{
    console.log(" is child ");
}
else if ( age > 18 && age <=30)
{
     console.log("is a youth");
}
else 
{
    console.log(" is an adult");
}

// SWITCH
let day = "Thursday"



switch(day){
    case "Monday":
        console.log("today is Monday")
        break;
    case "Tuesday":
        console.log("today is Tuesday")
        break;
    case "Wednesday":
        console.log("today is Wednesday")
        break;
    case "Thursday":
        console.log("today is Thursday")
        break;
    case "Friday":
        console.log("today is Friday")
        break;
    default:
        console.log("Its a weekend");
        
}


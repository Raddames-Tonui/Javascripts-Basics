
// TERNARY OPERATOR
// SYNTAX:  booleanExpression ? "thing to return if true"  : "Thing to return if false";



// const likelyToRain = true;
// const clothingChoice = likelyToRain ? "rain boots" : "sun hat";

// console.log(clothingChoice);

let ismarried = false;
let marriage = ismarried ? "I am married" : "I am not married";
console.log(marriage)

const password = true;
const login = password ?  "Successful log in" :"Wrong Password" ;
console.log(login)

const rain = 0.5
const clothing = rain >= 0.3 ? "Wear Jacket" : "Wear sunglasses";
console.log(clothing)

// Input values: we could easily imagine asking a user for these values.
const name = "Raddames";
const probabilityOfRain = 0.8;
const temperatureInC = 29       ;

const likelytoRain = probabilityOfRain >= 0.6;
const harmfulTemperature = temperatureInC >= 28;

const rainPercentage = probabilityOfRain *100 ;
const rainAdvice = likelytoRain ? "stay indoors": "go out and play";
const temperatureAdvice = harmfulTemperature ? "watch a movie" : " wear a short";


const message = `Hello ${name} with a temperature of ${temperatureInC}C and rain chance of ${rainPercentage}%, you should ${temperatureAdvice} and ${rainAdvice}. `

console.log(message)



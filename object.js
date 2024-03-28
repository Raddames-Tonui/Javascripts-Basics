    // OBJECTS => Collection of named objects
    // syntax => {key: value pairs} enclosed in  { }
const array1 = [ "Iman", "Mike", " Mbigua"] // This is an array
    // console.log(array1[1]); // accessing the array

const obj1 = {fname: "Iman", age : 22 , school: "MS"}
// How to access items
// console.log(obj1["age"]); // or
// console.log(obj1.age);
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

for (let i in obj1){
    // console.log(i + " "+ obj1[i]);// this will display the value items in the object
    
}

const obj2 = [{fname: "Isaac", age : 21 , school: "MS"}, 
             {fname: "Jeff", age : 23 , school: "MS"},
             {fname: "Radde", age : 24 , school: "MS"}];

    // console.log(Object.values(obj2[1]));
    // console.log(obj2[2]);

    for(x in obj2[2]){
        console.log(obj2[2][x]);
    }

    // MAPS -  
    const a = obj2.map((obj2)=>{
        return `${obj2.fname}` 
        })
console.log(a);
//if
//else
//switch

let fname="Raddames"

if(fname =="Raddames")
{
    console.log("The student fname is "+ fname);
}

else if(fname =="Tonui")
{
    console.log("The student fname is " +fname);
}



// WITH LOGIC
let marks =90

if(marks = 0 && marks <=40)
{
    console.log("failed");
}

 else if(marks>=40 && marks<=50)
{
    console.log("Average");
}
else{
    console.log("Passed");
}

// SWITCH
let day=2

switch(day){
    case 1: 
        console.log("Monday")
        break;

    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday");
        break;
    
    default:
        console.log("Not available");
    }

const agee =25;
let isadult, canWork,canEnlist, canDrink;

switch (true) {
    case agee>=21:
         canDrink = true;
    case agee >=18:
        isadult =true;
        canEnlist =true;
    case agee >=16:
        canWork = true;

}

console.log(canWork);

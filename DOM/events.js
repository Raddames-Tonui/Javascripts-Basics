document.getElementById("submit").addEventListener("click",function(){
    console.log("Mouse Over")
    document.getElementById("display").innerText += "Mouse clicked" // this will display the mouse clicked in the display paragraph when clicked.
})

//Using a callback function display and give an alert box 
document.getElementById("alert").addEventListener("mousedown", display);

function display(){
    alert("This is an alert box!");
}

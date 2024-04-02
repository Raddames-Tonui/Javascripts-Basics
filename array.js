// ----------------------------------------------------------------------------------------------------------------------
                            // DECLARING ARRAYS
// ----------------------------------------------------------------------------------------------------------------------

const colors = ["blue", 'red', 'yellow', 'orange',56.6, 'pink' , 'white', ['true', 'false'], 'grey'  ]
// ----------------------------------------------------------------------------------------------------------------------
                            // ACCESSING ARRAYS
// ----------------------------------------------------------------------------------------------------------------------

    colors[5] // shows "pink"
    colors[7][1]; //accessing array inside array // display false
    colors[3] = "purple" // changes orange with purple (modification of array)
    console.log(typeof[7])

            // FOR OF => accessing items in array
    for(let items of colors)
    {        
        // console.log(items);   // displays all the items in the array
        if (typeof(items) === "number") {
            // console.log(items);      // displays only the item that is a number      
        }  
    }
            // FOR IN  => accessing properties of items in an array 
    for(let index in colors)
    {
        // console.log(index);  // displays all the indexess in the array
      
    }

// ----------------------------------------------------------------------------------------------------------------------
                                // ARRAY METHODS
// ----------------------------------------------------------------------------------------------------------------------
const num = [1,2,3,4,5,6]

    // a) LENGHT => Checks the lenght of the array
            colors.length     // prints the lenght of the array 
            colors[colors.length -1]; // prints the last item in the array 

    // b) PUSH => adds items at the end of the array
        num.push(890)  // adds 890 to end
        console.log(" 890 has been addes to end \n"+ num); // \n new line
        colors[7].push('boolean') // adds boolean to the end of the array ['true', 'false']

    // c)  UNSHIFT =>  adds items at the beginning of an array
        num.unshift(560)
        console.log( " 560 has been added to the beginning\n"+  num );
        colors[7].unshift("undefined") // adds "unshift" to the beginning of the array inside the array


    // d) POP // removes the last item in an array
        colors.pop()       //grey color has been removed"

    // e) SHIFT // removes the first item in array
        colors.shift()    //blue color has been removed

    // f) SLICE  =>  extract a section of elements or characters from the original array or string without modifying the original data. 
                    // Instead, it returns a new array or string containing the extracted portion. 
    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'pineapple', 'guavas'];

        let x = fruits.slice(2) // [ 'cherry', 'date', 'elderberry' ]
        console.log(x)
    let y=  fruits.slice(2, 5) //  [ 'cherry', 'date' ]  displays items from 2 to 4
        console.log(y)

    // g) SPLICE =>SYNTAX =) array.spplice(index, number of items to be removed,items to be added)       
        lnames = ["James", "Alex", "Kante", "Raddames", "Arnold","Zebedee"] 
        lnames.splice(3);// removes all the items from index 3 to the last [ 'James', 'Alex', 'Kante' ]
        lnames.splice(2,2) // removes the items from index 2 and the next 2 items  [ 'James', 'Alex', 'Arnold', 'Zebedee' ]
        lnames.splice(2,1, "Elijah", "Ruth") // removes items from index 2 and replaces with Elija and Ruth ["James", "Alex", "Elijah", "Ruth", "Raddames", "Arnold","Zebedee"] 
        console.log(lnames)

    let fnames = ["Peter", "Ean", "Oliver", "Richard", "Tyroline","Haron"]
    

    // h) SORT
        fnames.sort()
        console.log(fnames); //[ 'Ean', 'Haron', 'Oliver', 'Peter', 'Richard', 'Tyroline' ]

    // i) REVERSE
        fnames.reverse()
        console.log(fnames) // [ 'Tyroline', 'Richard', 'Peter', 'Oliver', 'Haron', 'Ean' ]
    // j) SPREAD OPERATOR (...) => which looks like an ellipsis: ..., allows us to "spread out" the elements of an existing Array into a new Array, creating a copy
   
        let originalArray=[23,23,44,556,664,34]
        let spreadOperator = [... originalArray]
        console.log(spreadOperator); // [ 23, 23, 44, 556, 664, 34 ]
        spreadOperator.push("putin") // [ 23, 23, 44, 556, 664, 34, 'putin' ]
        console.log(spreadOperator);
        const addedToSpreadOperator =["pinky", ...spreadOperator]
        console.log(addedToSpreadOperator); // [ 'pinky', 23, 23, 44, 556, 664, 34, 'putin' ]
        console.log (originalArray); // Not affected [ 23, 23, 44, 556, 664, 34 ]

        const menu = [
            "Jalapeno Poppers",
            "Cheeseburger",
            "Fish and Chips",
            "French Fries",
            "Onion Rings",
          ];
        const newMenu =[
            ...menu.slice(0,1), // displays index 0 only  then adds the below
                "Veggie Burger",
                "House Salad",
                "Teriyaki Tofu",
            ...menu.slice(3) // Continues from index 3 to the end
        ];
        console.log(menu); // => ["Jalapeno Poppers", "Cheeseburger", "Fish and Chips", "French Fries", "Onion Rings"]
        console.log(newMenu); // => ["Jalapeno Poppers", "Veggie Burger", "House Salad", "Teriyaki Tofu", "French Fries", "Onion Rings"]

// ----------------------------------------------------------------------------------------------------------------------     
                            // ARRAY ITERATIONS
// ----------------------------------------------------------------------------------------------------------------------
    
        let students = ["Ken", "Ian", "Sam", "Radde"]
        const numb = [1,2,3,4,5,6]
        
    // a) FOREACH => iterates each item in an array and you can perform operation in each of them.
        students.forEach((i) => console.log(i))  // shows the array
        
    
    // b)   MAP => modifies each element in an array and returns a modified array
        // SYNTAX:    const newArray = originalArray.map((element) => { //perform operations})
           
        
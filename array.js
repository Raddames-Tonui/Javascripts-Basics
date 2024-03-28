                // DECLARING ARRAYS
const num = [1,2,3,4,5,6]
const colors = ["blue", 'red', 'yellow', 'orange',56.6, 'pink' , 'white', ['true', 'false'], 'grey'  ]
                // ACCESSING ARRAYS
// console.log(num);
// console.log(colors[3]); // accessing item in array => displays pink
// console.log(colors[7][1]); // accessing array inside an array
// console.log(colors.indexOf("pink")); // shows the index of "pink" which is 3

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
    
            // ARRAY METHODS
    // a) LENGHT => Checks the lenght of the array
    
    // console.log(colors.length);  // prints the lenght of the array
    // console.log(colors[colors.length -2]); // prints the last item in the array

    // b) PUSH => adds items at the end of the array
        num.push(890)  
        console.log(" 890 has been addes to end \n"+ num);
        colors[7].push('boolean') // adds boolean to the end of the array ['true', 'false']
    // c)  UNSHIFT =>  adds items at the beginning of an array
        num.unshift(560)
        console.log( " 560 has been added to the beginning\n"+  num );
        colors[7].unshift("undefined") // adds "unshift" to the beginning of the array inside the array
    // d) POP 
        colors.pop()
        console.log(colors ); //grey color has been removed"
    // e) SHIFT
        colors.shift()
        console.log(colors); //blue color has been removed

    // f) SLICE  =>  extract a section of elements or characters from the original array or string without modifying the original data. 
                    // Instead, it returns a new array or string containing the extracted portion. 
    let slicenames = [100, 300, 445, 877, 783 ,373 , 347,878]
        let x= slicenames.slice(3) // [ 877, 783, 373, 347, 878 ]
        console.log(x)
    let y=  slicenames.slice(2, 5) //  [ 445, 877, 783 ] displays items from 2 to 4 
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

                // ARRAY ITERATIONS
        
        let students = ["Ken", "Ian", "Sam", "Radde"]
        const numb = [1,2,3,4,5,6]
        
    // a) FOREACH => iterates each item in an array and you can perform operation in each of them.
        students.forEach((i) => console.log(i))  // shows the array
        numb.forEach((elements) =>{
        let square = elements * elements  // squares the items in an array
            console.log(square);
        } )
    // b)   MAP => modifies each element in an array and returns a modified array
        // const newArray = originalArray.map((element) => {
        //     //perform operations
        // })
        let newArray = numb.map((v)=>{
                return  v * v
        })
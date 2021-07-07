function solve(input) {
    // parse input, take first element and split by "!"
    let groceries = input.shift().split(`!`);
    //for every remaining element:
    let line = input.shift();
    while (line != `Go Shopping!`){
        let[command, item, newItem] = line.split(' ');
switch(command){
    case 'Urgent':
        urgent(groceries,item);
        break;
    case 'Unnecessary':
        unnecessary(groceries,item);
        break;
    case 'Correct':
        correct(groceries, item, newItem);
        break;
    case 'Rearrange':
        rearrange(groceries,item);
        break;
}
        line = input.shift();

    }
    // if element is "Go Shopping" - end iteration
    //execute operation based on element content
    // Urgent --> add item to beginning of the list
    // Unnecessary  --> remove by name item from list
    //Correct --> replace item by name
    //Rearrange --> move item by name to the end of the list
    // print result
console.log(groceries.join(`, `));

    function urgent(list, item) {
        // Urgent --> add item to beginning of the list
        
        if (list.includes(item)==false){
            list.unshift(item);
        }
    }
    
    function unnecessary(list, item) {
        // Unnecessary  --> remove by name item from list
        //if we use includes()--> true, false
        //indexOf(index / -1)
        if (list.includes(item)==true){
            // if we use "filter" this is unnecessary. Filter makes new array.
            let index = list.indexOf(item);// find element index
            list.splice(index, 1);
        }
    }
    
    function correct(list, item, newItem) {
        //Correct --> replace item by name
       // test :
       //let groceries = `Milk!Water`.split(`!`);
       // correct(groceries,"Water", "Wine")
       //console.log(groceries)
        if (list.includes(item)==true){
            let index = list.indexOf(item);
            list[index]=newItem;
        }
    }
    
    function rearrange(list, item) {
        //Rearrange --> move item by name to the end of the list
        
        if (list.includes(item)==true){
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.push(item);
        }
    }

}

solve(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]);
solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
])



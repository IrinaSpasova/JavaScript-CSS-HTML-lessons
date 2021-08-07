function solve(input) {
    let actions = {
        "Add Stop": add, // at first we write: "Add Stop": ()=>{},
        "Remove Stop": remove,
        "Switch": swap,
    };
    // store initial string to result

    let result = input.shift();
    //for each input, until " Travel":
    //-determine command;
    //execute command
    // print current result
    while (input[0] != "Travel") {
        let tokens = input.shift().split(":");
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2]);

        console.log(result);
    }

    console.log(`Ready for world tour! Planned stops: ${result}`);
    //print final result

    //add Stop
    //- validate index
    //insert given string into result
    function add(index, string) {
        index = +index;
        if (validate(index)) {
            let left = result.substring(0, index);
            let right = result.substring(index);
            result = left + string + right;


        }
    }

    //remove stop
    // validate both indexes
    //remove part of the result from start to end(inclusive)
    function remove(start, end) {
        start = +start;
        end = +end;

        if (validate(start) && validate(end)) {
            let left = result.substring(0, start);
            let right = result.substring(end+1);// иначе взима една буква повече
            result = left + right;
        }
    }
    //Switch
    //replace all 
    function swap(oldString, newString){
        //result = result.replace(oldString,newString); //wavi samo za edno
        //za da smenim vsichki:
        let pattern = new RegExp(oldString,'g'); //wse edno: let pattern = /Hawai/g
        result = result.replace(pattern,newString);
        
    }


    function validate(index) {
        return (index >= 0) && (index < result.length);
        //pravim q za da ne ni se nalaga da validirame ws. put.
    }
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);



// Drug variant:

// function swap(oldString, newString){
//     // check if oldString is found
//     //store index
//     //take left part from 0 to index
//     //take right part from index +oldString.length to end 
//     //assign to result left +newString+right
//    // repeat search starting from (left +newString).length 

//     let index = result.indexOf(oldString);
//     while (index>-1){
//         let left = result.substring(0,index);
//         let right = result.substring(index+oldString.length);
//         result +=left+newString+right;
//         index = newString.length;

//         let index = result.indexOf(oldString,index);
//     }
  
    
// }
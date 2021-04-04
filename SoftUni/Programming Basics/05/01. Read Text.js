// function data(input){
//     let index = 0;

//     while (true) {
    
//       let str = input[index];
    
//       index++;
    
//       if (str === "Stop") {
    
//         break;
    
//       }
    
//       console.log(str);

//     }
// }
// data(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);




function data(input){

    let counter = 0;
    // let word = input[counter];

        while(input[counter] !== "Stop"){

            console.log(input[counter])
            counter++;  
            
        }
    }

data(["Stop","Nakov","SoftUni","Sofia","Bulgaria","SomeText","AfterStop","Europe","HelloWorld"]);
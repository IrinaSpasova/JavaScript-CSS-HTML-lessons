// function sorting(input) {

//     //create new array;
//     //iterate i until length;
//     //if i % 2 ===0
//     //get biggest possible;
//     // else 
//     // det smallest possible; 
//     //add to new;
//     // delete from old;
//     //print result

//     let sortedNumbers = [];
//     let inputLength = input.length; /*за да не чупи цикъла*/
//     for (let i = 0; i < inputLength; i++) {
//         let number = 0;

//         if (i % 2 === 0) {
//             number = Math.max(...input);
//         } else {
//             number = Math.min(...input);
//         }
//         sortedNumbers.push(number);
//         input.splice(input.indexOf(number), 1);
//     }
    

//     console.log(sortedNumbers.join(` `));
// }



function sorting (arr){

    arr = arr.sort((a,b) => b-a);
    let ourArray = [];

    while(arr.length>0){
        ourArray.push(arr.shift());
        ourArray.push(arr.pop());
    }
console.log(ourArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])


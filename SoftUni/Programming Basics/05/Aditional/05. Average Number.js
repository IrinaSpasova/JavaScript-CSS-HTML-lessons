
function data(input) {
    let numbers = Number(input[0]);
    let sum = 0;
   
    for (let i = 1; i <=numbers; i++) {
        sum += Number(input[i]);
    

    }
    console.log((sum/numbers).toFixed(2));
}
data([2, 6, 4]);


// function data(input) {
    
//     let sum = 0;
//     let counter = 0;
//     for (let i = 0; i < Number(input.length); i++) {
//         sum += Number(input[i]);
//         counter++;

//     }
//     console.log((sum/counter).toFixed(2));
// }
// data([4, 6, 2]);


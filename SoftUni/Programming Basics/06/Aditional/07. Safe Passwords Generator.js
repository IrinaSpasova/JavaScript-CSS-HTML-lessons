function data(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let numberPasses = Number(input[2]);
    let result = "";
    let counter = 0;
    let i = 35;
    let j = 64;
    for (let x = 1; x <= a; x++) {

        for (let y = 1; y <= b; y++) {

            result += (`${String.fromCharCode(i)}${String.fromCharCode(j)}${x}${y}${String.fromCharCode(j)}${String.fromCharCode(i)}|`)

            i++;
            if (i === 56) {
                i = 35;
            }

            j++;
            if (j === 97) {
                j = 64;
            }
            counter++;

            if (counter === numberPasses) {
                console.log(result);
                return;
            }
            

        }
    }
    if ((x = a) && (y = b)) {
        console.log(result);
        return;
    }

}
data([20, 50, 10])











// function data(input){
// let a = Number(input[0]);
// let b = Number(input[1]);
// let numberPasses = Number(input[2]);



// let result = "";
// let counter = 0;
// for ( let i =35; i<=55;i++){
//     for (let j = 64; j<=96; j++){
//         for (let x= 1; x<=a; x++){

//             for(let y = 1; y <=b; y++){
//                 result+=(`${String.fromCharCode(i)}${String.fromCharCode(j)}${x}${y}${String.fromCharCode(j)}${String.fromCharCode(i)}|`)
//                 counter++;
//                 if(counter===numberPasses){
//                     console.log(result);
//                     return;
//                 }

//             }
//         }
//         if((x=a)&&(y=b)){
//             console.log(result);
//             return;
//         }
//     }
// }


// }
// data([2,3,10])



// function data(input){
//     let a = Number(input[0]);
//     let b = Number(input[1]);
//     let numberPasses = Number(input[2]);

/*LOGIC*/

// let result = "";
// let counter = 0;
// for ( let i =35; i<=55;i++){
//     for (let j = 64; j<=96; j++){
//         for (let x= 1; x<=a; x++){
//             for(let y = 1; y <=b; y++){
//                 result+=(`${String.fromCharCode(i)}${String.fromCharCode(j)}${x}${y}${String.fromCharCode(j)}${String.fromCharCode(i)}|`)
//                 counter++;
//                 if(counter===numberPasses){
//                     break;
//                 }
//             }
//         }
//     }
// }

// console.log(result);
// }

// data([2,3,10]);
function data(input){

    let result = (((Number(input[0])*Number(input[1]))+((Number(input[0])/6)*Number(input[2])))*1.2).toFixed(0);

    console.log(`Price to be paid by Djokovic ${Math.floor(((result))/8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil((result/8)*7)}`);
}
data(["850",
"4",
"2"])


// function data(input){

//     let result = ((Number(input[0])*Number(input[1]))+((Number(input[0])/6)*Number(input[2])))*1.2;

//     console.log(`Price to be paid by Djokovic ${Math.floor(result/8)}`);
//     console.log(`Price to be paid by sponsors ${Math.ceil((result/8)*7)}`)

//S Math.round е най- добре, ама джъдж дава грешка.
// }
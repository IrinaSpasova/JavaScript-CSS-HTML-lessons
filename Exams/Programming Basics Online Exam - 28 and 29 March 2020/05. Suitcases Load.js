function data(input) {
    let volume = Number(input[0]);

    let counter = 1;
    let load3 = 0;
    while (input[counter] != "End") {
        let suitcases = Number(input[counter]);
        volume -= suitcases;
        if ((counter) % 3 === 0) {
            load3 = (suitcases * 0.1).toFixed(1);
            volume-=Number(load3).toFixed(1);
        }
        volume=Number(volume.toFixed(1));
        if(volume<0){
                        console.log("No more space!");
                        console.log(`Statistic: ${counter-1} suitcases loaded.`);
                        return;
                    }
                    counter++;
    }
    console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter-1} suitcases loaded.`);

}
data(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])


// function data(input){
//     let volume = Number(input[0]);

//     let counter=1;
//     let load=0;
//     while(input[counter] != "End"){
//     let suitcases = Number(input[counter]);
//         load +=suitcases;
//         if ((counter)%3 === 0){
//             load+=suitcases*0.1;
//         }
//         if(load>=volume){
//             console.log("No more space!");
//             console.log(`Statistic: ${counter} suitcases loaded.`);
//             return;
//         }

//     counter++;
//     }
//     console.log("Congratulations! All suitcases are loaded!");
//     console.log(`Statistic: ${counter-1} suitcases loaded.`); /* за да не оtчете и завъртането, в което няма куфар, а "end"*/

//     }
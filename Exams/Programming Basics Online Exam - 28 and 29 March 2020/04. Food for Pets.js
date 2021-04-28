function solve(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let foodQuantity = Number(input[index]);
    index++;
    let dogQuantity = Number(input[index]);
    index++;
    let catQuantity = Number(input[index]);
    index++;
    let currentDay = 1;
    let dogFood = 0;
    let catFood = 0;
    let biscuits = 0;
 
    while (currentDay <= days) {
        if (currentDay % 3 == 0) {
            biscuits += (dogQuantity + catQuantity) * 0.1;
        }
 
        dogFood += dogQuantity;
        catFood += catQuantity;
        dogQuantity = Number(input[index]);
        index++;
        catQuantity = Number(input[index]);
        index++;
        currentDay++;
    }
 
    let total = dogFood + catFood;
    let dogP = ((dogFood / total) * 100).toFixed(2);
    let catP = ((catFood / total) * 100).toFixed(2);
    let totalP = ((total / foodQuantity) * 100).toFixed(2);
    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${totalP}% of the food has been eaten.`);
    console.log(`${dogP}% eaten from the dog.`);
    console.log(`${catP}% eaten from the cat.`);
}









// function data(input) {

//     let days = Number(input[0]);
//     let food = Number(input[1]);

//     let counter = 2;
//     let dogFood = 0;
//     let catFood = 0;
//     let cookey = 0;
//     let dayCounter =0 ;
//     for (let i = 1; i <= days; i++) {
//         let dogFoodPerDay = Number(input[counter]);
//         let catFoodPerDay = Number(input[counter + 1]);
//         dayCounter++;
//         if (dayCounter % 3 === 0) {
//             cookey += Math.round((dogFoodPerDay + catFoodPerDay) * 0.1);
//         }

//         dogFood += dogFoodPerDay;
//         catFood += catFoodPerDay;
        
//         counter += 2;
//     }
//     console.log(`Total eaten biscuits: ${cookey}gr.`)
//     console.log(`${(((dogFood+catFood)/food)*100).toFixed(2)}% of the food has been eaten.`)
//     console.log(`${(((((dogFood/food))/((dogFood+catFood)/food)))*100).toFixed(2)}% eaten from the dog.`)
//     console.log(`${(((((catFood/food)))/((dogFood+catFood)/food))*100).toFixed(2)}% eaten from the cat.`)

// }
data(["3",
"500",
"100",
"30",
"110",
"25",
"120",
"35"])

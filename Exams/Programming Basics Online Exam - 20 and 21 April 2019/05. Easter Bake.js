function data(input) {
    let count = Number(input[0]);

    let floor = 0;
    let floorCount = 0;
    let sugar = 0;
    let sugarCount = 0;
    let counter = 1;
    for (let i = 1; i <= count; i++) {
        let actualFloor = Number(input[counter+1]);
        let actualSugar = Number(input[counter])
        if (i === 1) {
            floor = actualFloor;          
            sugar = actualSugar;           
        }
        if (actualSugar > sugar) {
            sugar = actualSugar;
        }
        if (actualFloor > floor) {
            floor = actualFloor;
            
        }
        floorCount += actualFloor;
        sugarCount += actualSugar;
        counter += 2;
    }
  
console.log(`Sugar: ${Math.ceil(sugarCount/950)}`);
console.log(`Flour: ${Math.ceil(floorCount/750)}`);
console.log(`Max used flour is ${floor} grams, max used sugar is ${sugar} grams.`)

}
data(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"
])
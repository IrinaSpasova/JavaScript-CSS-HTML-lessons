function data(input) {
    let groupsCount = Number(input[0]);


    let allPeople = 0;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    let group5 = 0;
    for (let i = 1; i <= groupsCount; i++) {
        let people = Number(input[i]);
        allPeople += people;
        if (people <= 5) {
            group1 += people;
            
        }

        if (people >= 6 && people <= 12) {
            group2 += people;
           
        }

        if (people >= 13 && people <= 25) {
            group3 += people;
            
        }

        if (people >= 26 && people <= 40) {
            group4 += people;
            
        }

        if (people >= 41) {
            group5 += people;
            
        }

    }
console.log(`${((group1/allPeople)*100).toFixed(2)}%`);
console.log(`${((group2/allPeople)*100).toFixed(2)}%`);
console.log(`${((group3/allPeople)*100).toFixed(2)}%`);
console.log(`${((group4/allPeople)*100).toFixed(2)}%`);
console.log(`${((group5/allPeople)*100).toFixed(2)}%`);
}
data(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"])
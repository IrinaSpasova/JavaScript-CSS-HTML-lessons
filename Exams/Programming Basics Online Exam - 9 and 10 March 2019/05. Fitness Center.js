function data(input) {
    let allPeople = Number(input[0]);

    let counterBack = 0;
    let counterChest = 0;
    let counterLegs = 0;
    let counterAbs = 0;
    let counterShake = 0;
    let counterBar = 0;
    let counterWork = 0;
    let counterConsume = 0;

    for (let i = 1; i <= allPeople; i++) {
        let activity = input[i];
        switch (activity) {
            case "Back":
                counterBack++;
                counterWork++;
                break;
            case "Chest":
                counterChest++;
                counterWork++;
                break;
            case "Legs":
                counterLegs++;
                counterWork++;
                break;
            case "Abs":
                counterAbs++;
                counterWork++;
                break;
            case "Protein shake":
                counterShake++;
                counterConsume++;
                break;
            case "Protein bar":
                counterBar++;
                counterConsume++;
                break;
        }

    }
    console.log(`${counterBack} - back`);
    console.log(`${counterChest} - chest`);
    console.log(`${counterLegs} - legs`);
    console.log(`${counterAbs} - abs`);
    console.log(`${counterShake} - protein shake`);
    console.log(`${counterBar} - protein bar`);
    console.log(`${((counterWork/allPeople)*100).toFixed(2)}% - work out`);
    console.log(`${((counterConsume/allPeople)*100).toFixed(2)}% - protein`);
}
data(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])

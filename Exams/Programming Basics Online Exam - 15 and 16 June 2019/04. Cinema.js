function data(input) {
    let places = Number(input[0]);


    let counter = 1;
    let peopleCounter = 0;
    let sum = 0;
    while (input[counter] != "Movie time!") {
        let people = Number(input[counter]);
        let income = people * 5;
        peopleCounter+=people;
        if(peopleCounter>places){
            console.log(`The cinema is full.`);
            console.log(`Cinema income - ${sum} lv.`);
            return;
        }
        sum += income
        if (people % 3 === 0) {
            sum -= 5;
        }

       
            counter++;
    }
    console.log(`There are ${places-peopleCounter} seats left in the cinema.`);
    console.log(`Cinema income - ${sum} lv.`)

}
data(["60",
"10",
"6",
"3",
"20",
"15",
"Movie time!"])

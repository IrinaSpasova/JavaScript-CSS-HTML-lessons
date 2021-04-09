function data(input) {
    let poorGrades = Number(input[0]);


    /*LOGIC*/
    let counter = 1;
    let sum = 0;
    let counterGrades = 0;
    let counterBadGrades = 0;
    let lastProblemName = "";

    while (counterBadGrades <= poorGrades) {
        let problemName = input[counter];
        let problemGrade = Number(input[counter + 1]);
        
        if (problemName == "Enough") {
            lastProblemName = input[counter - 2];
            console.log(`Average score: ${(sum/counterGrades).toFixed(2)}`);
            console.log(`Number of problems: ${counterGrades}`);
            console.log(`Last problem: ${lastProblemName}`);
            break;
        }
        sum += problemGrade;
        counterGrades++;
        
        if (problemGrade <= 4) {
            counterBadGrades++;
            if (counterBadGrades === poorGrades) {
                console.log(`You need a break, ${counterBadGrades} poor grades.`);
                break;
            }
        }
        counter += 2;
    }

}
data(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


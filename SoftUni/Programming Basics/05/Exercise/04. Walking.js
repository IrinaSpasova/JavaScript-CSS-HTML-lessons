function data(input) {
    counter = 0;

    /*LOGIC*/
    let sumSteps = 0;
    while (true) {
        let steps = input[counter];
        if (steps == "Going home") {
            sumSteps += Number(input[counter + 1]);
            if (sumSteps >= 10000) {
                console.log(`Goal reached! Good job!`)
                console.log(`${sumSteps-10000} steps over the goal!`);
                break;
            } else {
                console.log(`${10000-sumSteps} more steps to reach goal.`)

                break;
            }
        }
        sumSteps += Number(steps);
        if (sumSteps >= 10000) {
            console.log(`Goal reached! Good job!`)
            console.log(`${sumSteps-10000} steps over the goal!`);
            break;
        }
        counter++;
    }
}



data(["125",
"250",
"4000",
"30",
"2678",
"4682"])
;

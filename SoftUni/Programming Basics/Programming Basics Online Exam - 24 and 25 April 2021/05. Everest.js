function data(input) {
    let startMeters = 5364;
    let daysCounter = 1;

    /*LOGIC*/
    let counter = 0;
    while (input[counter] != "END") {
        let action = input[counter];
        let dailyMeters = Number(input[counter + 1]);

        if (action == "Yes") {
            daysCounter++;
        }
        if (daysCounter > 5) {
            console.log(`Failed!`);
            console.log(startMeters);
            return;
        }
        startMeters += dailyMeters;

        if (startMeters >= 8848) {
            console.log(`Goal reached for ${daysCounter} days!`)
            return;
        }
      
        counter += 2;
    }
    console.log(`Failed!`);
    console.log(startMeters);

}
data(["Yes","1000","Yes","945","No","1200","END"])

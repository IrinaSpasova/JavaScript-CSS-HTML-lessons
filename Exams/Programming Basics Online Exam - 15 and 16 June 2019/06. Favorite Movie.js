function data(input) {

    let counter = 0;
    let name = "";
    let sum = 0;
    while (input[counter] != "STOP" && counter < 7) {
        let movieName = input[counter];
        let length = movieName.length;
        let currentSum = 0;
        for (let i = 0; i <= length - 1; i++) {
            let char = movieName[i].charCodeAt();
            currentSum += char;
            if (char >= 65 && char <= 90) {
                currentSum -= length;
            }
            if (char >= 97 && char <= 122) {
                currentSum -= length * 2;
            }
        }
        counter++;
        if (sum < currentSum) {
            sum = currentSum;
            name = movieName;
        }
    }
    if (counter >= 7) {
        console.log("The limit is reached.");
        console.log(`The best movie for you is ${name} with ${sum} ASCII sum.`);
        return;
    }

    console.log(`The best movie for you is ${name} with ${sum} ASCII sum.`);
}
data(["Matrix",
"Breaking bad",
"Legend",
"STOP"]);

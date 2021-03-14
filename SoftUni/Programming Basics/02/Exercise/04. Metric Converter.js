function data(input) {
    let length = Number(input[0]);
    let startMeasures = input[1];
    let endMeasures = input[2];
    let result = 0;
    /*LOGIC*/

    if (startMeasures === "mm") {
        length = length / 1000;
    } else if (startMeasures === "cm") {
        length = length / 100;
    } 

    if (endMeasures === "mm") {
        result = length * 1000;
    } else if (endMeasures === "cm") {
        result = length * 100;
    } else if (endMeasures === "m") {
        result = length;
    }

    console.log(result.toFixed(3));

}

data(["45","cm","mm"])
;
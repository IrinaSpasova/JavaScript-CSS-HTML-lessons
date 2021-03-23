function data(input) {

    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMinutes = Number(input[3]);


    /*LOGIC*/

    let late = "Late";
    let onTime = "On time";
    let early = "Early";

    let examTime = (examHours * 60) + examMinutes;
    let arrivalTime = (arrivalHours * 60) + arrivalMinutes;
    let totalMinutesDifference = arrivalTime - examTime;

    let studentArrival = late;

    if (totalMinutesDifference < -30) {
        studentArrival = early;
    } else if (totalMinutesDifference <= 0) {
        studentArrival = onTime;
    }

    let result = "";
    if (totalMinutesDifference != 0) {
        let hoursDifference = Math.abs(~~(totalMinutesDifference / 60));
        let minutesDifference =
            Math.abs(totalMinutesDifference % 60);
        if (hoursDifference > 0) {
            result = hoursDifference + ":" + (minutesDifference > 9 ? minutesDifference : "0" + minutesDifference) + " hours";
        } else {
            result = minutesDifference + " minutes";
        }

        if (totalMinutesDifference < 0) {
            result += " before the start";
        } else {
            result += " after the start";
        }
    }
    console.log(studentArrival);
    if (result) {
        console.log(result);
    }

}
data(["9",
    "30",
    "9",
    "50"
]);
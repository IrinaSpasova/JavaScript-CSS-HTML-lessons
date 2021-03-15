function data(input) {

    let restDays = Number(input[0]);

    /*LOGIC*/

    let workingDays = 365 - restDays;
    let playInWorkingDays = workingDays * 63;
    let playInRestDays = restDays * 127;

    let playTime = playInRestDays + playInWorkingDays;
    let difference = Math.abs(30000 - playTime);
    let hours = Math.trunc(difference / 60);
    let minutes = difference % 60;

    if (30000 >= playTime) {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    } else {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    }




}
data((["80"]))
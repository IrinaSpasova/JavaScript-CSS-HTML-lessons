function data(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]); /* за по-лесно можем да напишем let minutes = Number (input[1]) като let minutes = Number (input[1]+15), защото това е константа; 
    
    можем да напишем резултата и като:   if (newMinutes < 10) {
        console.log(`${hours}:0${newMinutes}`);
    } else {
        console.log(`${hours}:${newMinutes}`);
    }*/

    /*LOGIC*/
    let newMinutes = minutes + 15;
    if (newMinutes > 59) {
        hours += 1;
        newMinutes = newMinutes - 60;
    }
    if (hours > 23) {
        hours = hours - 24;
    }

    if (newMinutes<10){
        newMinutes = "0"+newMinutes;
    }
console.log(hours+":"+newMinutes);

}

data(["0", "01"]);
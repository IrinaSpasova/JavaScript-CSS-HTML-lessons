function data(year, month, day) {

    var today = new Date(year, month, day);
    var b = new Date(today.setDate(today.getDate() - 1));
    let year1 = b.getFullYear();
    let month1 = b.getMonth();
    let date1 = b.getDate();
    if ((month1 == 0 || month1 == 2 || month1 == 4 || month1 == 6 || month1 == 7 || month1 == 9 || month1 == 11) && date1 == 31) {
        date1 = 30;
    }
    if ((leapYear(year)===true) && month1 == 2 && date1 == 30) {
        date1 = 29;
    }else if ((leapYear(year)===false) && month1 == 2 && date1 == 30){
        date1=28;
    }

    function leapYear(years) {
        var result;
        if (years / 400) {
            result = true;
        } else if (years / 100) {
            result = false;
        } else if (years / 4) {
            result = true
        } else {
            result = false;
        }
        return result;
    }
    console.log(`${year1}-${month1}-${date1}`);
// оr
    /*function leapYear(years){
    if (input)
    if ( input % 4 === 0 && input % 100 !==0 || input % 400 ===0){
       return true;
    }else{
       return false;
    }
}*/

    
    /* and we may use monht-1...
    
    
    or
    
    function getPreviousDay(year, month, day) {
    let today = new Date(year, month - 1, day);
    let yesterday = new Date(today);
 
    yesterday.setDate(yesterday.getDate() - 1)
 
    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`)
}*/

}
data(2020, 3, 1)


console.log('---');

data(2016, 10, 1)


/*function data(year, month, day) {

    var now = new Date(year, month, day);

let b=newFunction();

    function newFunction() {
        return new Date(now.getMonth() - 1 === 0 ? now.getFullYear() - 1 : now.getFullYear(),
            now.getDate() - 1 === 0 ? now.getMonth() - 1 : now.getMonth(),
            now.getDate() - 1);
    }


   /* const d = new Date(year, month,day)
    let b = new Date((new Date(d)).valueOf() - 1000*60*60*24);
    from other solution
    */




/*const year1 = b.getFullYear()
    const month1 = b.getMonth()
    const date1 = b.getDate()
console.log(`${year1}-${month1+1}-${date1}`);

}*/




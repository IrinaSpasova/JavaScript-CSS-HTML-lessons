/*8. Days in a month
Write a JavaScript function to get the number of days in a month.
The input comes as two numeric parameters. The first element is the month, the second is the year.
The output must return the number of days in a month for a given year.*/

function daysMonth(num1, num2) {
    let date = new Date(num2, num1, 0).getDate()
    console.log(date);
}

daysMonth(1,2012);


/* ****************************** */
/*     Решение за книга Наков     */
/* ****************************** */


function data(input) {
    let hours = Number(input[0]);
    let days = Number(input[1]);
    let workers = Number(input[2]);


    /*LOGIC*/
    let workingDays = days * 0.9;
    let workingHours = workingDays * 8 * workers;
    let overWork = workers * 2 * workingDays;
    let totalHours = Math.floor(workingHours + overWork);

    if (hours <= totalHours) {
        console.log(`Yes!${totalHours-hours} hours left.`);
    } else {
        console.log(`Not enough time!${hours -totalHours} hours needed.`);
    }

}


/* ****************************** */
/*     Решение за СофтУни         */
/* ****************************** */
/* ****************************** */
/*     Решение за книга Наков     */
/* ****************************** */


function data(input) {
    let hours = Number(input[0]);
    let days = Number(input[1]);
    let workers = Number(input[2]);


    /*LOGIC*/
    let workingDays = days * 0.9;
    let workingHours = workingDays * 8 * workers;
    let overWork = workers * 2 * workingDays;
    let totalHours = Math.floor(workingHours + overWork);

    if (hours <= totalHours) {
        console.log(`Yes!${totalHours-hours} hours left.`);
    } else {
        console.log(`Not enough time!${hours -totalHours} hours needed.`);
    }

}

data(["90", "7", "3"]);
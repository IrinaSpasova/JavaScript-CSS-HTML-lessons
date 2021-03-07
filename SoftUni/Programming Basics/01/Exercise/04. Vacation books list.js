function data(input) {
    let pagesInTheBook = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    /*LOGIC*/

    let hoursToRead = pagesInTheBook / pages;
    let daysPerBook = hoursToRead / days;

    console.log(daysPerBook);
}
data(["432",
    "15",
    "4"
]);
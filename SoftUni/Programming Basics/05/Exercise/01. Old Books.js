function data(input) {

    let bookWanted = input[0];
    let counter = 1;
    let bookIsFound = false;
    let newBook = input[counter];
    while (newBook !== "No More Books") {

        if (newBook === bookWanted) {
            bookIsFound = true;
            break;
        }
        counter++;
        newBook = input[counter];
    }
    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter-1} books.`);
    } else {
        console.log(`You checked ${counter-1} books and found it.`)
    }

}
data(["Bourne", "True Story", "Forever", "More Space", "The Girl", "Spaceship", "Strongest", "Profit", "Triple", "Stella", "The Matrix", "Bourne"])

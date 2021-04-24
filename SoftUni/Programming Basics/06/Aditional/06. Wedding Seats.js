function data(input) {
    let lastSector = input[0].charCodeAt();
    let rowsFirstSector = Number(input[1]);
    let seatsOddRow = Number(input[2]);
    let seatCurrentRow = seatsOddRow + 2;

    /*LOGIC*/
    //  let result = "";
    let totalSeats = 0;

    for (let i = `A`.charCodeAt(); i <= lastSector; i++) {
        for (let j = 1; j <= rowsFirstSector; j++) {
            if (j % 2 === 0) {
                seatCurrentRow = seatsOddRow + 2;
            } else {
                seatCurrentRow = seatsOddRow;
            }
            for (let k = 1; k <= seatCurrentRow; k++) {
                totalSeats++;
                console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(96+k)}`);
            }
        }
        rowsFirstSector++;
    }
    console.log(totalSeats);
}
data(["D", 3, 2])
//{String.fromCharCode(96+k)}  a e номер 97 w ascii таблицата, ако искам к да придобие стойност малко английско '"а"- събирам 96 с к( к трябва да е равна на 1)

//result+=(`${String.fromCharCode(i)}${j}${String.fromCharCode(96+k)} `) console.log(result);
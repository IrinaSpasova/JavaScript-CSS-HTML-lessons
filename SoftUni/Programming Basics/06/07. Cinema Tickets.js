function data(input) {
    /*LOGIC*/
    let counter = 0;
    let counterStudent = 0;
    let counterStandard = 0;
    let counterKid = 0;
    let ticketsCounter = 0;
    
    while (input[counter] !== "Finish") {

        if (input[counter] !== "student" && input[counter] !== "standard" && input[counter] !== "kid") {
            movie = input[counter];
            places = Number(input[counter + 1]);
            counter += 2;
            let currentMovieTicket=0;
            while (input[counter] !== "End") {

                if (input[counter] === "student") {
                    counterStudent++;
                    ticketsCounter++;
                    currentMovieTicket++;
                } else if (input[counter] === "standard") {
                    counterStandard++;
                    ticketsCounter++;
                    currentMovieTicket++;
                } else if (input[counter] === "kid") {
                    counterKid++;
                    ticketsCounter++;
                    currentMovieTicket++;
                }
                if (currentMovieTicket === places) {
                    console.log(`${movie} - ${((currentMovieTicket/places)*100).toFixed(2)}% full.`);
                    break;
                } else if (input[counter] !== "student" && input[counter] !== "standard" && input[counter] !== "kid") {
                    break;
                }
                counter++;
            }
            if (input[counter] === "End") {
                console.log(`${movie} - ${((currentMovieTicket/places)*100).toFixed(2)}% full.`);
                
            }
        }
        if (input[counter] === "Finish") {
            break;
        }
        counter++;
    }
    console.log(`Total tickets: ${ticketsCounter}`);
    console.log(`${((counterStudent/ticketsCounter)*100).toFixed(2)}% student tickets.`);
    console.log(`${((counterStandard/ticketsCounter)*100).toFixed(2)}% standard tickets.`);
    console.log(`${((counterKid/ticketsCounter)*100).toFixed(2)}% kids tickets.`);

}
data(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

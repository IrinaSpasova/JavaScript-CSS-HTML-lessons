function data(input) {
    let year = input[0].toLowerCase();
    let holydays = Number(input[1]);
    let weekendsHome = Number(input[2]);


    /*LOGIC*/

    let weekendsSofia = 48 - weekendsHome;
    let gamesSofia = weekendsSofia * (3 / 4);
    let gamesHolydays = holydays * (2 / 3);
    let games = gamesSofia + gamesHolydays + weekendsHome;

    if (year === "leap") {
        games *= 1.15;
        console.log(Math.floor(games));
    } else {
        console.log(Math.floor(games));
    }
}
data(["leap",
    "5",
    "2"
])
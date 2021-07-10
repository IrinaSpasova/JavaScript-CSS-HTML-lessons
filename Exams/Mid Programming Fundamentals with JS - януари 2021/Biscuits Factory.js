function sort(input = []) {
    let biscuits = Number(input.shift());
    let workers = Number(input.shift());
    let otherFactory = Number(input.shift());
    // or:
    // const [biscuits,workers, otherFactory]= input.map(Numbers);

    let totalBiscuits = 0;

    for (let i = 1; i <= 30; i++) { //защото иначе няма да отчете коректно ден 3
        if (i % 3 === 0) {
            totalBiscuits += Math.floor((biscuits * workers) * 0.75);
        } else {
            totalBiscuits += biscuits * workers;
        }

    }

    console.log(`${totalBiscuits}`);
    let percent = Math.abs(((totalBiscuits - otherFactory) / otherFactory) * 100);
    if (totalBiscuits > otherFactory) {
        console.log(`${percent.toFixed(2)}`);

    } else {
        console.log(`${percent.toFixed(2)}`);
    }
}

sort(['78', '8', '16000'])
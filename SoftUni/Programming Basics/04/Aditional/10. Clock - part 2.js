function data(input) {

    for (let i = 0; i < 24; i++) {
        for (let b = 0; b < 60; b++) {
           for(let c = 0; c<60;c++){
            console.log(`${i} : ${b} : ${c}`);
           }
        }
    }
}
data([]);
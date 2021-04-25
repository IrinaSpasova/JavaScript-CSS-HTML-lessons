function data(input) {
    let days = Number(input[0]);
    let hour = Number(input[1]);

    /*LOGIC*/

    
    let sum = 0;

    for (let i = 1; i <= days; i++) {
        let sumForTheDay = 0;
        if (i % 2 === 0) {
            for (let j = 1; j <= hour; j++) {
                if (j % 2 != 0) {
                    sumForTheDay += 2.5;
                } else {
                    sumForTheDay += 1;
                }
                
            }
            sum += sumForTheDay;
                console.log(`Day: ${i} - ${sumForTheDay.toFixed(2)} leva`);
        }
        if (i % 2 != 0) {
            for (let j = 1; j <= hour; j++) {
                if (j % 2 === 0) {
                    sumForTheDay += 1.25;
                } else {
                    sumForTheDay += 1;
                }
                
            }
            sum += sumForTheDay;
                console.log(`Day: ${i} - ${sumForTheDay.toFixed(2)} leva`);
        }   
      
    }
    console.log(`Total: ${sum.toFixed(2)} leva`);
}
data([5, 2])
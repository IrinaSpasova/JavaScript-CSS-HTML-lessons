function data(input) {
    let name = input[0];
    let counter = 1;
    let points = 301;
    let counterSuccess = 0;
    let counterLoose =0;
   // let counterShots = 0;


    while (points > 0) {
        let area = input[counter];
        let currentPoints = Number(input[counter + 1]);

        switch (area) {
            case "Single":
                break;
            case "Double":
                currentPoints *= 2;
                break;
            case "Triple":
                currentPoints *= 3;
                break;
        }
        if (currentPoints <= points){
            points -= currentPoints;
            counterSuccess++;
           // counterShots++;
            
        }else if (currentPoints > points) {

            /*  let newArea = input[counter];
            let newPoints = Number(input[counter + 1]);

            while (true) {
                switch (newArea) {
                    case "Single":
                        break;
                    case "Double":
                        newPoints *= 2;
                        break;
                    case "Triple":
                        newPoints *= 3;
                        break;
                }
                if (newPoints <= points) {
                    points -= newPoints;
                    break;
                }
                counterShots++;
                counter += 2;
                if (input[counter] === "Retire") {
                    console.log(`${name} retired after ${counterShots-counterSuccess} unsuccessful shots.`);
                    return;
                }
            }

        }*/
        counterLoose++;    
        }

        counter+=2;
        if (input[counter] === "Retire") {
            console.log(`${name} retired after ${counterLoose} unsuccessful shots.`);
            return;
        }
    }
console.log(`${name} won the leg with ${counterSuccess} shots.`)

}
data(["Rob Cross","Triple","20","Triple","20","Triple","20","Triple","20","Double","20","Triple","20","Double","5","Triple","10","Double","6","Retire"])


function data(input) {
    let name = input[0];
    let counter = 1;
    let points = 301;
    let counterSuccess = 0;
    let counterLoose =0;
   // let counterShots = 0;


    while (points > 0) {
        let area = input[counter];
        let currentPoints = Number(input[counter + 1]);

        switch (area) {
            case "Single":
                break;
            case "Double":
                currentPoints *= 2;
                break;
            case "Triple":
                currentPoints *= 3;
                break;
        }
        if (currentPoints <= points){
            points -= currentPoints;
            counterSuccess++;
           // counterShots++;
            
        }else if (currentPoints > points) {       
        counterLoose++;    
        }

        counter+=2;
        if (input[counter] === "Retire") {
            console.log(`${name} retired after ${counterLoose} unsuccessful shots.`);
            return;
        }
    }
console.log(`${name} won the leg with ${counterSuccess} shots.`)

}
function lift(arr) {
    let people = +arr.shift()
    let liftArr = arr.shift().split(' ').map(Number) // or .map(x => +x)

    for (let i = 0; i < liftArr.length; i++) {

        if (people == 0) {

            break
        }
        if (liftArr[i] > 3) {
            continue
        }

        if (liftArr[i] == 0) {
            if (people > 3) {
                liftArr[i] += 4;
                people -= 4;
            } else {
                liftArr[i] = people;
                people = 0;
            }


        } else {
            if ((4 - liftArr[i]) - people < 0) {
                people -= (4 - liftArr[i])
                liftArr[i] = 4
            } else {
                liftArr[i] += people;
                people = 0;
            }
        }
    }

    if (people == 0 && liftArr[liftArr.length - 1] < 4) {
        console.log('The lift has empty spots!');
        console.log(liftArr.join(' '));
    } else if (people > 0 && liftArr[liftArr.length - 1] == 4) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(liftArr.join(' '));
    } else {
        console.log(liftArr.join(' '));
    }


}








/*function solve(input) {

    //Take the passengers

    let passengers = Number(input[0]);
    let lift = input[1].split(` `).map(Number);


    //put them in the lift
   
        for (i = 0; i < lift.length; i++) {

            if (passengers == 0) {

                break;
            }
            if (lift[i] > 3) {
                continue;
            }
            let currentWagon = lift[i];
            if (currentWagon == 0) {
                currentWagon += 1;
            }

          if (//passengers > 4 - currentWagon ) { 
               for (let k = currentWagon; k <= 4; k++) {
                passengers -= 1;
                lift[i] += 1;
            }
        }else{
                
        }

       
    }
    //if lift is full and no passengers left print message
    // if lift is full and passengers left print message
    // if lift has empty spaces print message
    console.log(lift);
}*/

lift(["15", "0 0 0 0 0"]);
lift([ "20", "0 2 0"]);
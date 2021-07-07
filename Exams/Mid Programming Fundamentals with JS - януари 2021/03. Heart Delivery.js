function solve(input) {
    //parse input
    let houses = input.shift().split(`@`).map(Number);
    let index = 0;
    //for each remaining element before " Love!"
    for (let line of input) {
        if (line == `Love!`) {
            break;
        }

        // parse command
        let offset = Number(line.split(` `)[1]);

        //-move indexed
        index += offset;

        //-if index outside array -> index =0
        if (index >= houses.length) {
            index = 0;
        }
        // -if heart count = 0, print message,
        if (houses[index] == 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] -= 2;
            if (houses[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        //-else decrease heart count and check if heart count = 0 
        //decrease heart count


    }

    //print result
    console.log((`Cupid's last position was ${index}.`));
    let missed = houses.filter(x => x > 0).length;
    //count houses>0

    if (missed == 0) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${missed} places.`);
    }

}
solve([`10@10@10@2`, `Jump 1`, `Jump 2`, `Love!`])
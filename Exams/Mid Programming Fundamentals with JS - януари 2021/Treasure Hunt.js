function tresureHunt(array) {
    let initialTresure = array.shift().split('|');
    let total = 0;
    let isIndexValid = (index, arr) => index >= 0 && index < arr.length;

    for (const line of array) {
        let [command, ...elements] = line.split(' ');

        if (command === 'Yohoho!') {
            break;
        }

        if (command === 'Loot') {
            for (const item of elements) {
                if (!initialTresure.includes(item)) {
                    initialTresure.unshift(item);
                }
            }
        } else if (command === 'Drop') {
            let index = Number(elements[0]);
            if (isIndexValid(index, initialTresure)) {
                let dropped = initialTresure.splice(index, 1);
                initialTresure.push(...dropped);
            }
        } else if (command === 'Steal') {
            let index = Number(elements[0]);
            let stealedTresure = initialTresure.slice(-index);
            initialTresure.splice(-index);
            console.log(stealedTresure.join(', '));
        }
    }
    total = initialTresure
        .reduce((sum, initialTresure) => sum + initialTresure.length, 0) / initialTresure.length;

    // if (total > 0) {
    if (initialTresure.length > 0) {
        return `Average treasure gain: ${total.toFixed(2)} pirate credits.`
    } else {
        return "Failed treasure hunt."
    }
}



/* На Джъдж не му харесва

function data(input) {
    let initialLoot = input.shift().split("|");
    let whatSteal = "";

    for (let element of input) {
        if (element === 'Yohoho!') {
            break;
        }

        let tokens = element.split(" ");
        let command = tokens.shift();

        switch (command) {
            case "Loot":
                for (let item of tokens) {
                    if (initialLoot.indexOf(item) === -1) {
                        initialLoot.unshift(item);
                    }
                }
                break;
            case "Drop":
                let count = +tokens[0];
                if (count >= 0) {
                    let changePosition = initialLoot.splice(count, 1).toString();
                    initialLoot.push(changePosition);
                }
                break;
            case "Steal":
                let num = +tokens[0];
                let del = initialLoot.length - num;
                whatSteal = initialLoot.splice(del);
                break;

        }


    }
    let lastCalculations = initialLoot.map(x => x.length);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let lengthOfTheArray = initialLoot.length;

    if (whatSteal) {
        console.log(whatSteal.join(", "));
    }

    if (lastCalculations.length = 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${(lastCalculations.reduce(reducer)/lengthOfTheArray).toFixed(2)} pirate credits.`);
    }
   
}

*/
data
    ([


        'Diamonds|Silver|Shotgun|Gold',
        'Loot Silver Medals Coal',
        'Drop -1',
        'Drop 1',
        'Steal 6',
        'Yohoho!'



    ])
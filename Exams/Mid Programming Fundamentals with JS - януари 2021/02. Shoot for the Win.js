function solve(input) {
    let targets = input
        .shift()
        .split(` `)
        .map(Number);

    let isShot = (current) => current === -1;
    let isInsideArray = (index,arr) =>index >= 0 && index < arr.length;
    let shotTargets = 0;
    for (const inputLine of input) {
        if (inputLine === 'End') {
            break;

        }

        let index = Number(inputLine);

        if (isInsideArray(index, targets) && !isShot(targets[index])) {
            let value = targets[index];
            targets[index] = -1;
            //targets = targets.map(transformOtherTargets);

            targets = targets.map((current) => {
                if (!isShot(current)) {
                    if (current > value) {
                        current -= value;
                    } else {
                        current += value;
                    }
                }
                return current;
            });
            shotTargets++;
        }
    }

    console.log(`Shot targets: ${shotTargets} -> ${targets.join(` `)}`);

    // function transformOtherTargets(current) {
    //     if (!isShot(current)) {
    //         if (current > value) {
    //             current -= value;
    //         } else {
    //             current += value;
    //         }
    //     }
    //     return current;
    // }
}
solve(['24 50 36 70', '0', '4', '3', '1', 'End'])
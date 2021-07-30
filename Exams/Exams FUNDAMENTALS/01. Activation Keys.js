function solve(input) {
    let rawKey = input.shift();

    for (const line of input) {
        if (line === 'Generate') {
            console.log(`Your activation key is: ${rawKey}`);
            break;
        }
        let [command, x, y, z] = line.split('>>>');
        if (command == 'Contains') {
            if (rawKey.includes(x)) {
                console.log(`${rawKey} contains ${x}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command == `Flip`) {
            y = +y;
            z = +z;

            let substring = rawKey.substring(y, z);
            if (x == 'Upper') {
                substring = substring.toUpperCase();
            } else if (x == 'Lower') {
                substring = substring.toLowerCase();
            }

            rawKey = rawKey.substring(0, y) + substring + rawKey.substring(z);
            console.log(rawKey);
        } else if (command = 'Slice') {

            rawKey = rawKey.substring(0, x) + rawKey.substring(y);
            console.log(rawKey);
        }





    }



}
solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]);
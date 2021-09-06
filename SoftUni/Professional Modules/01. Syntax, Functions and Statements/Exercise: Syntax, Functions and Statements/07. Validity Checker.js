// Pythagoras theorem: a^2 + b^2 = c^; 
// For this case we look for hypotenuse:
//Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)



function data(x1, y1, x2, y2) {

    result(x1, y1, 0, 0);

    result(x2, y2, 0, 0);

    result(x1, y1, x2, y2);

    function result(x1, y1, x2, y2) {

        const distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

        const validString = Number.isInteger(distance) ? 'valid' : 'invalid';

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validString}`);


    }
}
    data(2, 1, 1, 1);

/* or

function validDistance(x, y, x1, y1) {
    const isValidDist = (x, y, x1, y1) =>
        Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2)) % 1 === 0
        // % 1  checks if number is integer
    const pairs = [
        [x, y, 0, 0],
        [x1, y1, 0, 0],
        [x, y, x1, y1],
    ]
    const printMsg = (a, b, c, d, validity) => `{${a}, ${b}} to {${c}, ${d}} is ${validity}`
    pairs.forEach((x, i) =>
        console.log(isValidDist(...pairs[i]) ? printMsg(...x, "valid") : printMsg(...x, "invalid"))
    )
}*/
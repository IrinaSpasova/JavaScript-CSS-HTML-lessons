
function solve(letter) {

    let num = letter.charCodeAt(0);

    if (num > 96 && num <= 122) {

        console.log("lower-case");

    }

    if (num > 64 && num <= 90) {

        console.log("upper-case");

    }

}





/*function solve(firstChar) {
 
    if (firstChar === firstChar.toUpperCase()) {
        console.log(`upper-case`);
    }
 
    else if (firstChar === firstChar.toLowerCase()) {
        console.log(`lower-case`);
    }
}*/
solve('258963');
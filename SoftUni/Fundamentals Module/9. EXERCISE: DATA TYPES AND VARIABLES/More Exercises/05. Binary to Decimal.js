/*function solve(input) {

    var inp = input+"";

    var len = inp.length;
    
    var string = inp.split("");
    
    var counter = string.map(function(val, i) {
      return i;
    }).reverse();
    
    var storeBin = string.map(function(val, i) {
      return val * Math.pow(2, counter[i]);
    });
    
    
    
    var dec = 0; /* output */



/*for (i = 0; i < len; i++) {
      dec += storeBin[i]
    }
    console.log("Entered binary " + inp);
    console.log("Decimal " + dec);
}*/


function solve(binary) {
    let binaryString = binary + "";
    let stepOne = binaryString.split(``);
    let stepTwo = stepOne.reverse();
    let stepThree = stepTwo.join(``)

    let sum = 0;

    for (let i = 0; i < stepThree.length; i++) {
        let number = Number(stepThree[i]);
        let calculationsOne = 0;
        if (i === 0) {
            calculationsOne = 1;
        } else {
            calculationsOne = Math.pow(2, i);
        }

        let calculationsTwo = number * calculationsOne;

        sum += calculationsTwo;
    }
    console.log(sum);

}
solve(11110000)
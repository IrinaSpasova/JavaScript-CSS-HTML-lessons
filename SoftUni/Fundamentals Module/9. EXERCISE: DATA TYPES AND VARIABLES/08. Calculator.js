function solve(number, operator, anotherNumber) {

let action = operator.charCodeAt();
    if(action===43){
        console.log((Number(number)+Number(anotherNumber)).toFixed(2));
    }else if(action===45){
        console.log((Number(number)-Number(anotherNumber)).toFixed(2));
    }else if(action===42){
        console.log((Number(number)*Number(anotherNumber)).toFixed(2));
    }else if(action===47){
        console.log((Number(number)/Number(anotherNumber)).toFixed(2));
    }
    
}
solve(5,"+",10)


/*function calculator(num1, operator, num2) {
    console.log(eval(num1 + operator + num2).toFixed(2));



    function calcultor(num1, char, num2) {
 
    let result = 0
 
    switch (char) {
        case `+`: result = num1 + num2;
            break;
        case `-`: result = num1 - num2;
            break;
        case `/`: result = num1 / num2;
            break;
        case `*`: result = num1 * num2;
            break;
    }
 
    console.log(result.toFixed(2));
}
}*/
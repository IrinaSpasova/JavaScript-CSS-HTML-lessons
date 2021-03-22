/*       1*/


function data(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2]


    /*LOGIC*/
    switch (operator) {
        case `+`:
            if ((n1 + n2) % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${n1+n2} - even`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${n1+n2} - odd`)
            }
            break;
        case `-`:
            if ((n1 - n2) % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${n1-n2} - even`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${n1-n2} - odd`)
            }
            break;
        case `*`:
            if ((n1 * n2) % 2 === 0) {
                console.log(`${n1} ${operator} ${n2} = ${n1*n2} - even`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${n1*n2} - odd`)
            }
            break;
        case `/`:
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${(n1/n2).toFixed(2)}`)
            }
            break;

        case `%`:
            if (n2 === 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${n1%n2}`)
            }
            break;

    }
}
/*

                   2

function operationsBetweenNumbers(input){
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let operand = input.shift();
 
    let result = 0.0;
    let oddOrEven = "";
    switch(operand){
        case"+":
        result = num1 + num2;
        if(result % 2 == 0){
            oddOrEven = "even";
        }
        else{
            oddOrEven = "odd";
        }
        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;
        case"-":
        result = num1 - num2;
        if(result % 2 == 0){
            oddOrEven = "even";
 
        }
        else{
            oddOrEven = "odd";
        }
        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;
        case"*":
        result = num1 * num2;
        if(result % 2 == 0){
            oddOrEven = "even";
     
        }
        else{
            oddOrEven = "odd";
        }
        console.log(`${num1} ${operand} ${num2} = ${result} - ${oddOrEven}`);
        break;
        case"/":
        result = (num1 / num2).toFixed(2);
        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            break;
        }
        else{
            console.log(`${num1} / ${num2} = ${result}`);
        }
        break;
        case"%":
        result = num1 % num2;
        if(num2 == 0){
            console.log(`Cannot divide ${num1} by zero`);
            break;
        }
        else{
            console.log(`${num1} % ${num2} = ${result}`);
        }
        break;
    }
 
}*/


data(["123",
    "12",
    "/"
]);
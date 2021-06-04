//Обръщане на място, в масива, който се подава!


function data(input) {

    for (let i = 0; i <= (input.length - 1) / 2; i++) {
        let k = (input.length - 1) - i;
        let temp = input[i];
        input[i]=input[k];
        input[k]=temp;
    }
console.log(input.join(` `));
}

data(['abc', 'def', 'hig', 'klm', 'nop']);
console.log(`---`);
data(['a', 'b', 'c', 'd', 'e']);
console.log(`---`);// raboti samo s `` ili '', ne i s ""
data(['33', '123', '0', 'dd']);


/* Друго решение:

function data(input) {
let k = input.length - 1;
    for (let i = 0; i <= (input.length - 1) / 2; i++; к--) {
        
        let temp = input[i];
        input[i]=input[k];
        input[k]=temp;
    }
console.log(input.join(` `));
}*/
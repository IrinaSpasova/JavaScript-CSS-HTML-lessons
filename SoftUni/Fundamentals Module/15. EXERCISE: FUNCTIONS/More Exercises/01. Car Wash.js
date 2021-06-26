function wash(arr){

    let sum = 0;
for (let element of arr){

    let command = element;
    switch(command){
        case 'soap':
            sum += 10;
            break;
        case 'vacuum cleaner':
            sum *=1.25;
            break;
        case 'mud':
            sum *=0.9;
            break;
        case 'water':
            sum *= 1.2;
            break;
    }
}

console.log((`The car is ${sum.toFixed(2)}% clean.`));

}
wash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
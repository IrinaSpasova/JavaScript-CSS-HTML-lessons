function data(input) {
    if (input % 10 === 0){
        console.log(`The number is divisible by ${10}`);
        return;
    }else if (input % 7 === 0){
        console.log(`The number is divisible by ${7}`);
        return;
    }else if (input % 6 === 0){
        console.log(`The number is divisible by ${6}`);
        return;
    }else if (input % 3 === 0){
        console.log(`The number is divisible by ${3}`);
        return;
    }else if (input % 2 === 0){
        console.log(`The number is divisible by ${2}`);
        return;
    }else {
        console.log(`Not divisible`);
        return;
    }




}
data(5);
data(18);
data(100);
data(27);
data(1643);
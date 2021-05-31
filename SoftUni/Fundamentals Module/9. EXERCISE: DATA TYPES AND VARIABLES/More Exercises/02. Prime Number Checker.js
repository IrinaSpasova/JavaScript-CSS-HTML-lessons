function solve(input){
if (input!==2 && input%2===0){
    console.log(false);
}else {
    let isPrime = true;
    for (let i = 2; i <= input/2; i++) {
        if (input % i == 0) {
            isPrime = false;
            console.log(false);
            break;
        } 
    }

    if (isPrime) {
        console.log(true);
    }
}


}
solve(29);
function data(input) {
    let n = Number(input[0]);
    /*LOGIC*/
    let counter = 1;
    
    while (counter <= n) {
        console.log(counter);
        counter = counter * 2 + 1;
       
    }
}
data(["40"]);
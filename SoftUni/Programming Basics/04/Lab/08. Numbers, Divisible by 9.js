function data(input) {

    let a = Number(input[0]);
    let b = Number(input[1]);

    /*LOGIC*/
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
/*сменяме i s x за прегледност*/ 
    for(let x = a; x <= b; x++){
        if (x % 9 === 0){
console.log(x);
        }
    }
}
data(["100", "200"]);
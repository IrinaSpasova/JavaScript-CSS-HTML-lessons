function data(a,b,c) {
    
    let result = 0;

    if (+a>+b && +a>+c){
        result =+a;
    }else if( +b>+a && +b>+c){
        result = +b;
    }else{
        result =+c;
    }
    console.log(`The largest number is ${result}.`);
}
data(5, -3, 16)
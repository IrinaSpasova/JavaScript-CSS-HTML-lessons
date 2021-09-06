function data(a, b){
let greatestCommonDivisor =0;
let length = 0;
if (+a > +b){
    length = +b;
}else{
    length = +a;
}

for(i = 1; i<=length; i++){
    if((+a%i ==0) && (+b%i == 0)){
        greatestCommonDivisor=i;
    }
}
console.log(greatestCommonDivisor);
}
data(2154, 458)
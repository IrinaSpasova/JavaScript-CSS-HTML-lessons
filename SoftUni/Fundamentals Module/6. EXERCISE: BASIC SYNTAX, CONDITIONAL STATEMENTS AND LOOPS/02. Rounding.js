function data(number, rounding){
if (rounding>15){
    rounding=15;
}
const rounded = number.toFixed(rounding);
const roundedNumber = parseFloat(rounded);
console.log(roundedNumber);


}

data(3.1485697425, 2);
data(2.5, 3);
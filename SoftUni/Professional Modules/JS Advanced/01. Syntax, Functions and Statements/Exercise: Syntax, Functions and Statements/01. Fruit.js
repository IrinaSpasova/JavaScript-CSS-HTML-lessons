function data(a, b, c){
let fruit = a;
let weight = +b/1000;
let price = +c;
let money = (weight*price).toFixed(2);
console.log(`I need $${money} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);


}

data('orange', 2500, 1.80)

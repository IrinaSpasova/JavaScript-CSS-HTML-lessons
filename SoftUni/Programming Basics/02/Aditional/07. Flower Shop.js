function data(input){
let magnolias = Number(input[0])*3.25;
let hyacinths = Number(input[1])*4;
let roses = Number(input[2])*3.5;
let cactus = Number(input[3])*8;
let gift = Number(input[4]);


/*LOGIC*/

let incomeAfterTaxes = (magnolias+hyacinths+roses+cactus)*0.95;

if (incomeAfterTaxes>= gift){
    console.log(`She is left with ${Math.floor(incomeAfterTaxes-gift)} leva.`)
}else{
console.log(`She will have to borrow ${Math.ceil(gift-incomeAfterTaxes)} leva. `)
}

}
data(["15","7","5","10","100"])
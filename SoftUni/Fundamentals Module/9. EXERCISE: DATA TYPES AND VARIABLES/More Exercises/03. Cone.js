function solve(radius, height){

let s=(Math.PI*radius*radius);
let smallS =Math.sqrt((radius*radius)+(height*height));
let b = Math.PI*radius*smallS;
let area = (s+b).toFixed(4);
let v= ((1/3)*s*height).toFixed(4);

console.log(`volume = ${v}`);
console.log(`area = ${area}`);


}
solve(3,
    5
    )
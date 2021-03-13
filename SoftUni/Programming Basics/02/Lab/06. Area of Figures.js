function data(input){
let figure = input[0];
let a = Number(input[1]);
let b = (input[2]);
let result = "";

/*LOGIC*/
if (figure === "square"){
    result = a*a;
}else if(figure === "rectangle"){
    result = a*b;
} else if(figure === "circle"){
    result = Math.PI*a*a;
} else if(figure === "triangle"){
    result = (a*b)/2;
}
console.log(result.toFixed(3));
}
data(["rectangle",
"7",
"2.5"])

;
function data(input){
let num = Number(input[0]);

/*LOGIC*/
let sum = 1;
for (i=1; i<=num; i++){
sum *= i;
}
console.log(sum);


}
data(["8"])
function solve(input) {
let result="";

for (let element of input) {
    if(input.indexOf(element)%2==0){
        result += element+" ";
    }

}
console.log(result);
}
solve(['5', '10', '40', '50', '60']);
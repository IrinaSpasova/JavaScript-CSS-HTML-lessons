function solve (input){

    let result =[];
    let max = 0;
    for (let i=0; i< input.length; i++){
let current = Number(input[i]);
if (current>=max){
    max=current;
    result.push(current);
}else{
    continue;
}
    }
return(result);
}
solve([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );
function solve(arr, number){

    let result = JSON.parse(JSON.stringify(arr));
  for(let i=1; i<=number; i++){
       result.unshift(result.pop());
  }
    return result.join(" ");

}
solve(['1', 
'2', 
'3', 
'4'], 
2
)
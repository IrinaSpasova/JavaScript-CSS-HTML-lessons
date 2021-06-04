function solve(num){
if (num.length===1){
    console.log(`${num.join()}`);
    return;
}


while (num.length>1){
    let condensed=[num.length-1];
    for(let i =0; i<num.length-1; i++){ 
              
        condensed[i] = num[i] + num[i+1]    
    }
    num = condensed;    
}
console.log(num.join());
}
solve([1]);
console.log(`---`);
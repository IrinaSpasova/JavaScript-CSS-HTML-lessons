function power (x, n){

let result = 1; 
// В случая не може да е 0, защото цикъла ще остане 0, освен това така ще се изпълни условието, че число, вдигнато на нулева степен, дава 1;

for (let i = 1; i<=n; i ++){

    result *=x;
}
console.log(result);
}

power(2, 8);
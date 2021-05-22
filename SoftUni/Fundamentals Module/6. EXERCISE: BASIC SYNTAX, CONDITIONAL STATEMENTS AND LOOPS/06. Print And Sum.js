function data (givenStart, givenEnd){

    let sum = 0
    let numbers = "";
for (let i = givenStart; i <= givenEnd; i ++){
    numbers += i + " ";
    sum+=i;
}
console.log(numbers);
console.log(`Sum: ${sum}`);
}
data (5, 10)
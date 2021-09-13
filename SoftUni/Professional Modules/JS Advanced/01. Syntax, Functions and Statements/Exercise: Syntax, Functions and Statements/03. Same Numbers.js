function data(input){
let num = input.toString().split('');
let sum = 0;
let firstChar = num[0];
let counter= 0;

for (let i=0; i<num.length; i++){
    if (firstChar != num[i]){
counter++;
    }

    sum+= +num[i];
}

if(counter === 0){
    console.log("true");
}else{
    console.log("false");
}

console.log(sum);
}

data(1234);

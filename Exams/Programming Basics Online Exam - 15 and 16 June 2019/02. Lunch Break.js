function data(input){
    let movie = input[0];
    let length = Number(input[1]);
    let rest =Number(input[2]);
    
    let sum = (rest/8)+(rest/4)+length;
    if (Math.ceil(sum)<=rest){
    
        console.log(`You have enough time to watch ${movie} and left with ${(Math.ceil(rest-sum))} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${movie}, you need ${(Math.ceil(sum-rest))} more minutes.`)
    }
    
    }
data(["Game of Thrones",
"57",
"90"])

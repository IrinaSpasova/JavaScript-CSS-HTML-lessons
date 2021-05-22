function data(input){


if (input)
    if ( input % 4 === 0 && input % 100 !==0 || input % 400 ===0){
        console.log("yes");
    }else{
        console.log("no");
    }
}

data(3589);
data(2003);
data(1981);
data(4)

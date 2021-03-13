function data(input) {

    let num = Number(input[0]);
    
    /*LOGIC*/
    if (num <=99) {
        console.log("Less than 100");
    } else if (num<=200){
        console.log( "Between 100 and 200");
    }else{
        console.log("Greater than 200");
        }
   



}
data(["786"]);
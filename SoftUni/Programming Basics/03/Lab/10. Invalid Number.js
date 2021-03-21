function data(input){
    let num = Number(input[0]);


    /*LOGIC*/
   let inRange = (num >=100 && num <=200) || num ===0;
   
   if (!inRange){
       console.log("invalid");
   }  
}
data(["75"]);
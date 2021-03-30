function data(input){
    let num = (input[0]);
     
    
    /*LOGIC*/
    
    let sum = 0;
    
    for( i = 0; i< num.length; i++){
        let ch = Number(num[i]);
        sum += ch;
       
    }
    
    console.log(`The sum of the digits is:${sum}`)
    }
/*LOGIC*/

/*
function data(input){
let num = Number(input[0]);
let text = num + "";  Това превръща числото в текст (конкатенация цифри и текст)

LOGIC

let sum = 0;

for( i = 0; i< text.length; i++){
    let ch = Number(text[i]);
    sum += ch; 
    
    Това решение е грешно според Джъдж, Защото при подаване на прекалено дълго число JS закръглява;
   
   


console.log(`The sum of the digits is:${sum}`)
}*/

data(["564891"])




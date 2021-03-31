function data(input) {


    let text = input[0];
    let count = 0;
    for (i = 0; i < text.length; i++) {
        let letter = text[i];
        if (letter === " "){
            count+=1;
        }
    }
if (count>=10){
    console.log(`The message is too long to be send! Has ${count+1} words.`)
}else{
    console.log("The message was sent successfully!")
}


} 
data(["This message has as it's allowed!"])
/*s
  
  
  str[i] === " "
Or charAt:

str.charAt(i) === " "
You could also do it with .split():

return str.split(' ').length;*/
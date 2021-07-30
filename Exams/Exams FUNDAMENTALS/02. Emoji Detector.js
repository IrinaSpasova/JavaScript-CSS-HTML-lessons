function solve(input) {

    let regex = /((::)|(\*\*))[A-Z][a-z]{2,}\1/g; //emojis
    //Ако човек си поиграе с наклонките - стават интересни неща
    // ....]{2,})\1/   Единицата накрая указва да се повтори първата група ( началната в нашия случай)

    let regexDigits = /\d/g;

    let threshold = input[0].match(regexDigits).map(Number).reduce((a, b) => a * b, 1);
    console.log(`Cool threshold: ${threshold}`);
    let emojis = input[0].match(regex);

    if (emojis.length>0){
        console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    }

    let coolEm = emojis.map(x => {
        let word = x.split('')
            .splice(2, x.length - 4)
            .map(char => char.charCodeAt())
            .reduce((a, b) => a + b, 0)

        if (word >= threshold) {
            console.log(x);
        }
    })

}
solve([
    '5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'
  ])
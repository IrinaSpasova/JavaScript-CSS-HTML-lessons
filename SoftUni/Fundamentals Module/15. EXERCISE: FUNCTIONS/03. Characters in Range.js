function charactersInRange(firstCharacter, secondCharacter) {
    let min = firstCharacter.charCodeAt(0);
    let max = secondCharacter.charCodeAt(0);

    if (firstCharacter.charCodeAt(0) > secondCharacter.charCodeAt(0)) {
        min = secondCharacter.charCodeAt(0);
        max = firstCharacter.charCodeAt(0);

    }
    let result = '';

    for (let i = min+1; i < max; i++) {
        let character = String.fromCharCode(i);
        result += character + ' ';

    }
    return result;
}

let result = charactersInRange("d", "a");
console.log(result);
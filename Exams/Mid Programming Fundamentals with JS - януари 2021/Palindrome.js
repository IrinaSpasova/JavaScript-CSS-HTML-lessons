function palindrome(input) {

    let a = "";
    let reverse = "";
    for (let i = 0; i < input.length; i++) {

        let number = input[i] + "";
        let lower = number.toLowerCase()
        let b = lower.charCodeAt();

        if ((b >= 65 && b <= 90) || (b >= 97 && b <= 122)) {
            a += lower;

        } else {
            continue;
        }

/// To fix number issues...

// Няма проверка за числата!
    }
    reverse = a.split(``).reverse().join(``);
    if (reverse === a) {
        console.log(true);
    } else {
        console.log(false);
    }

}

palindrome("five|\_/|four");


//   || b === 32
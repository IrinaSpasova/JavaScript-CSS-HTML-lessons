function data(input) {
    let startNumber = Number(input[0]);
    let lastNumber = Number(input[1]);

    /*LOGIC*/
    let forthCycleStart = 0;
    let result = "";

    for (let i = startNumber; i <= lastNumber; i++) {
        if (i % 2 === 0) {
            forthCycleStart = 1;
        } else {
            forthCycleStart = 2;
        }
        for (let j = 1; j <= 9; j += 1) {
            if (j >= startNumber && j <= lastNumber) {
                for (let k = 1; k <= 9; k += 1) {
                    if (k >= startNumber && k <= lastNumber && (k+j)%2 ===0) {
                        for (let l = forthCycleStart; l < i; l += 2) {
                            if (l >= startNumber && l <= lastNumber) {
                                result += `${i}${j}${k}${l} `
                            }
                        }
                    }

                }
            }

        }
    }

    console.log(result);


}
data([2, 3]);

/*Долната функция е за всички четирицифрени комбинации на числа от 1 до 9, отговарящи на следните условия:

•	Ако номерът започва с четна цифра, то той трябва да завършва на нечетна цифра и обратното – ако започва с нечетна,  завършва на четна
•	Първата цифра от номера е по-голяма от последната
•	Сумата от втората и третата цифра трябва да е четно число



function data(input) {
    let startNumber = Number(input[0]);
    let lastNumber = Number(input[1]);*/

/*LOGIC*/
/* let forthCycleStart = 0;
 let result = "";

 for (let i = 2; i <= 9; i++) {
     if (i % 2 === 0) {
         forthCycleStart = 1; /* за да може първото четно да е по-голямо от последното четно. За да се запази /* нечетно последното го повдигаме с 2 при итерациите*/
//  }
// else {
//     forthCycleStart = 2; /* за да може първото нечетно да е по-голямо от последното нечетно. За да се запази четно последното го повдигаме с 2 при итерациите*/
// }
// for (let j = 2; j <= 8; j += 2) {
//     /* защото ни интересуват само четни числа тук*/
//     for (let k = 2; k <= 8; k += 2) {
//         /* защото ни интересуват само четни числа тук*/

//         for (let l = forthCycleStart; l < i; l += 2) {
//             result += `${i}${j}${k}${l} `
//         }

//     }

// }
// }

// console.log(result);


// }*/  
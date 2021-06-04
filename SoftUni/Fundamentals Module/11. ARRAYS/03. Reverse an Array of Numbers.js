function data(n, array) {

    // take n number of elements from array;
    // iterate array from start to finish and stop at index n;
    // store values in new array;

    /*for (let i =0; i< array.length; i++){
        array[i];    Класически цикъл за обхождане на масив
    }*/
    let arrayTwo = [];

    for (let i = 0; i < n; i++) {
        arrayTwo.push(array[i]);
    }


    // iterate new array from end to start;
    // store values in final array;
    // print result on single line;


    let arrayFinal = [];

    for (let i = arrayTwo.length - 1; i >= 0; i--) {
        arrayFinal.push(arrayTwo[i]);
    }

    console.log(arrayFinal.join(' ')); //  става ис: console.log(arrayFinal); но не печата трите реда;
}

data(3, [10, 20, 30, 40, 50]);
console.log('---'); //това се прави за да можем безпроблемно да прочетем трите масива, иначе чете само един; работи само с arrayFinal.join(' ') 
data(4, [-1, 20, 99, 5]);
console.log('---');
data(2, [66, 43, 75, 89, 47]);


/* Алтернативни решения:

function data(n, array) {
    let arrayFinal = [];

    for (let i = н - 1; i >= 0; i--) {
        arrayFinal.push(array[i]);
    }

    console.log(arrayFinal.join(' '));
}*/
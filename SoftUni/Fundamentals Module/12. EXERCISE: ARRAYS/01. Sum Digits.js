function addAndSubtract(list) {
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < list.length; i++) {
        let newNumber =0;
        let currentNumber = list[i];
        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
            list[i] = newNumber; /*taka se promenq indeksa w masiwa*/
        } else {
             newNumber = currentNumber - i;
            list[i] = newNumber;
        }
        oldSum += currentNumber;
        newSum += newNumber;
    }

    console.log(list);
    console.log(oldSum);
    console.log(newSum);
}
addAndSubtract([5, 15, 23, 56, 35])
/*става и с пуш*/
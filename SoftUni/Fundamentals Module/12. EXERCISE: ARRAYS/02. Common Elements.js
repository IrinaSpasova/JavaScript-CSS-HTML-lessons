function common(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let firstListElement = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            let secondListElement = arr2[j];
            if (firstListElement===secondListElement){
                console.log(firstListElement);
            }
        }
    }

}
common(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'])
console.log(`---`);
common(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])

    /*може и с фор оф*/
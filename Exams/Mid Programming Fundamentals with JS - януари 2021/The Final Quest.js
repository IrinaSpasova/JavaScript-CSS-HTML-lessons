function solve(input) {
    let words = input
        .shift()
        .split(' ');

        for (let line of input) {

            if (line === "Stop") {
                break;
            }
            let tokens = line.split(' ');
            let command = tokens[0];

            if (command === "Delete") {
                let deleteIndex = Number(tokens[1]);
                deleteWord(deleteIndex);

            } else if (command === "Swap") {
                let first = Number(tokens[1]);
                let second = Number(tokens[2]);
                swap(first, second);

            } else if (command === "Put") {
                let word = tokens[1];
                let index = Number(tokens[2]);
                put(word, index);

            } else if (command === "Sort") {
                words.sort(sortByDescending); // ne (sortByDescending()), защото така викаме РЕЗУЛТАТА на f(x)!!!

                //if we don't have function:
                //words.sort((a,b)=>{
                //  return b.localeCompare(a);
                //});

            } else if (command === "Replace") {
                let word1 = tokens[1];
                let word2 = tokens[2];
                replace(word1, word2);
                // or 
                //else{
                //  let word1 = tokens[1];
                // let word2 = tokens[2];

                // replace(word1, word2);
                //}
            }
        }

    console.log(words.join(` `));

    function deleteWord(index) {
        index++
        if (index >= 0 && index < words.length) {

            words.splice(index, 1);
            // or  index++ and words.splice(index+1, 1);
        }
    }

    function swap(word1, word2) {
        let indexOfFirst = words.indexOf(word1);
        let indexOfSecond = words.indexOf(word2);

        if (indexOfFirst !== -1 && indexOfSecond !== -1) {
            // в случая получаваме елементите и можем просто да ги разменим,
            //ако не беше така - ВИНАГИ с трета променлива се разменят местата!
            words[indexOfFirst] = word2;
            words[indexOfSecond] = word1;
        }
    }

    function put(word, index) {
        index-- // za da stane index -1

        if (index >= 0 && index <= words.length) { // js can put at existing index, that's why we use <= words.length, not < words.length
            words.splice(index, 0, word);
        }

    }

    function sortByDescending(a, b) {
        return b.localeCompare(a);
    }

    function replace(word1, word2) {
        let secondWordIndex = words.indexOf(word2);

        if (secondWordIndex >= 0 && secondWordIndex < words.length) {
            words[secondWordIndex] = word1;
        }
    }

}

solve()
function solve(input) {
    let array = input.shift().split(" ").map(Number);

    let line = input.shift();
    while (line != `Finish`) {

        let lineHere = line.split(' ');
        let command = lineHere[0];
        let item = +lineHere[1];
        let last = +lineHere[2];

        switch (command) {
            case 'Add':
                add(array, item);
                break;
            case 'Remove':
                remove(array, item);
                break;
            case 'Replace':
                replace(array, item, last);
              
                break;
            case 'Collapse':
                collapse(array, item);
                break;
        }
        line = input.shift();

    }

    console.log(array.join(` `));


    function add(array, item) {

        array.push(item);
    }

    function remove(array, item) {
        if(array.includes(item)){
        let index = array.indexOf(item);
        array.splice(index, 1);
        }
    }

    function replace(array, item, newItem) {
       if(array.includes(item)){
        let index = array.indexOf(item);       
        array[index] = newItem;
       }
        
    }

    function collapse(array, item) {
        let length = array.length;
        for (let i = 0; i < length; i++) {
            let forRemove = array[i];
            if (forRemove < item) {
                array.splice(i, 1);
                i = i-1;
            }
           
        }
    }


}
solve(['1 4 5 9 19 9 9 9 ','Add 1','Remove 9', 'Replace 9 10','Collapse 11', 'Finish']);

//solve(['1 20 -1 10 7 7 1111', 'Collapse 8', 'Finish']);

//solve(['5 9 70 -56 9 9', 'Remove 9', 'Replace 9 10', 'Remove 9', 'Finish']);


/*function solve(input) {
    let array = input.shift().split(" ").map(Number);
    let counter1 = 0;
    let counter2 = 0;



    let line = input.shift();
    while (line != `Finish`) {

        let lineHere = line.split(' ');
        let command = lineHere[0];
        let item = +lineHere[1];
        let last = +lineHere[2];

        switch (command) {
            case 'Add':
                add(array, item);
                break;
            case 'Remove':
              //  if (counter1 == 0) {
                    remove(array, item);
                    counter1++;
               // } 

                break;
            case 'Replace':
              //  if (counter2 == 0) {
                    replace(array, item, last);
                    counter2++;
               // }

                break;
            case 'Collapse':
                collapse(array, item);
                break;
        }
        line = input.shift();

    }

    console.log(array.join(` `));


    function add(array, item) {

        array.push(item);
    }

    function remove(array, item) {
        let index = array.indexOf(item);
        array.splice(index, 1);
    }

    function replace(array, item, newItem) {
        let index = array.indexOf(item);
        array[index] = newItem;
    }

    function collapse(array, item) {
        let length =array.length;
        for (let i = 0; i < length; i++) {
            let forRemove = array[i];
            if (forRemove < item) {

                array.splice(i, 1);
                i=0;
            }
        }
    }


}*/


/*function solve(input) {

    let array = input.shift().split(" ").map(Number);

    for (let element of array) {

        let currentLine = element.split(' ');
        let command = currentLine.shift();

        if (command === "Finish") {
            break;
        }

        if (command === "Add") {
            let first = currentLine.shift();
            chat.push(first);
        } else if (command === "Remove") {
            let first = currentLine.shift();
            if (chat.includes(first)) {
                let trashIndex = chat.indexOf(first);
                chat.splice(trashIndex, 1);

            }

        } else if (command === "Replace") {
            let first = currentLine.shift()
            let second = currentLine.shift()
            if (chat.includes(first)) {
                let index = chat.indexOf(first);
                chat[index] = second;

            }
        } else if (command === "Collapse") {
            let first = currentLine.shift()
            if (chat.includes(first)) {
                let trashIndex = chat.indexOf(first);
                chat.splice(trashIndex, 1);
                chat.push(first);
            }

        }


    }
    console.log(chat.join("\n"));
}
solve(['5 9 70 -56 9 9', 'Remove 9', 'Replace 9 10', 'Remove 9', 'Finish']);*/
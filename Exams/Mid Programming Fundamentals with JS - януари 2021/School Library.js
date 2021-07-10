function solve(input = []) {
    let initialBooks = data.shift().split("&");
    
    const addBook = (token) => {
        if (initialBooks.includes(token)) {
            initialBooks.unshift(token);
        } 
    }

    const takeBook = (token) => {
        let index = initialBooks.indexOf(token);
        if (index !== -1) {
            initialBooks.splice(index, 1);
        }
    }

    const insertBook = (token) => {
        if (!initialBooks.includes(token)) {
            initialBooks.push(token);
        }
    }


    const checkBook = (index) => {
        index = Number(index);
        if (index && index < initialBooks.length) /*?*/ {
            console.log(initialBooks[index]);
        }

    }

    const swapBooks = (bookOne, bookTwo) => {
        let indexOne = initialBooks.indexOf(bookOne);
        let indexTwo = initialBooks.indexOf(bookTwo);

        if (indexOne != -1 && indexTwo != -1) {
            let temp = initialBooks[indexOne];
            initialBooks[indexOne] = initialBooks[indexTwo];
            initialBooks[indexTwo] = temp;
        }

    }

    for (const line of input) {
        const [command, token, tokenTwo] = line.split(" | ");

        if (command === "Add book") {
            addBook(token);
        } else if (command === "Take book") {
            takeBook(token);
        } else if (command === "Insert book") {
            insertBook(token);
        } else if (command === "Check book") {
            checkBook(token);
        } else if (command === "Swap book") {
            swapBooks(token, tokenTwo);
        } else if (command === "Done") {
            break;
        }
    }

    console.log(initialBooks.join(`, `));
}
solve()
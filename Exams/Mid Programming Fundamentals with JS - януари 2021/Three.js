function solve(input) {
    let chat = [];



    for (let element of input) {

        let currentLine = element.split(' ');
        let command = currentLine.shift();

        if (command === "end") {
            break;
        }

        if (command === "Chat") {
            let first = currentLine.shift();
            chat.push(first);
        } else if (command === "Delete") {
            let first = currentLine.shift();
            if (chat.includes(first)) {
                let trashIndex = chat.indexOf(first);
                chat.splice(trashIndex, 1);

            }

        } else if (command === "Edit") {
            let first = currentLine.shift()
            let second = currentLine.shift()
            if (chat.includes(first)) {
                let index = chat.indexOf(first);
                chat[index] = second;

            }
        } else if (command === "Pin") {
            let first = currentLine.shift()
            if (chat.includes(first)) {
                let trashIndex = chat.indexOf(first);
                chat.splice(trashIndex, 1);
                chat.push(first);
            }

        } else if (command === "Spam") {

            for (let i = 0; i < currentLine.length; i++) {
                let first = currentLine[i];
                chat.push(first);

            }


        }
    }
    console.log(chat.join("\n"));
}

solve(['Chat Hello', 'Chat darling', 'Edit darling Darling', 'Spam how are you', 'Delete Darling', 'end']);
//solve(['Chat John', "Spam Let's go to the zoo", 'Edit zoo cinema', 'Chat tonight', 'Pin John', 'end']);
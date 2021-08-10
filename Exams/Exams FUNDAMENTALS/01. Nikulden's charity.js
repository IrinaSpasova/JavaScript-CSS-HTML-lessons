function solve() {
    let message = input.shift();
    const replace = (currentChar, newChar) => {
        //1. Replace with while loop, or:
        while (message.search(currentChar) != -1) {
            message = message.replace(currentChar, newChar);
        }
        console.log(message);
    }; // ne se hoistva
    const commandParser = {
        replace,
        cut,
        make,
        check,
        sum,

        // in this case ECMA6 make: key -> replace, value-> function replace;
    };

    for (let line of input) {
        if (line === "Finish") {
            break;
        }

        let tokens = line.split(" ");
        let command = tokens.shift().toLowerCase();

        commandParser[command](...tokens);
    }

    // function replace(currentChar, newChar) {
    //     //1. Replace with while loop, or:
    //     while (message.search(currentChar) != -1) {
    //         message = message.replace(currentChar, newChar);
    //     }
    //     //2. Replace with RegEx, or:
    //     //message = message.replace(new RegExp(currentChar, 'g'),newChar);

    //     //3. use this:
    //     //message.split(currentChar).join(newChar);
    //     // return message; - ne e zadylvitelen
    //     console.log(message);
    // }


    function cut(startIndex, endIndex) {

        startIndex = +startIndex;
        endIndex = +endIndex;
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            message = message.substring(0, startIndex) + message.substring(endIndex + 1);
            console.log(message);

        } else {
            console.log("Invalid index");
        }
    }


    function make(type) {
        if (type === "Upper") {
            message = message.toUpperCase();
        } else {
            message = message.toLowerCase();
        }
        console.log(message);
    }

    // We can use search(return index) or includes(return boolean)
    function check(string) {
        if (message.includes(string)) {
            console.log('Yes');
        } else {
            console.log("No");
        }
    }


    function sum(startIndex, endIndex) {
        startIndex = +startIndex;
        endIndex = +endIndex;
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            let sum = 0;

            let substring = message.substring(startIndex, endIndex + 1);

            for (let i = 0; i < substring.length; i++) {
                let ascii = substring.charCodeAt(i);
                sum += ascii;
            }
            console.log(sum);

        } else {
            console.log("Invalid index");
        }
    }


    function indexIsValid(index) {
        return index >= 0 && index < message.length;
    }
}



//OR

/*function solve() {
    let message = input.shift();

    const commandParser = {
        replace,
        cut,
        make,
        check,
        sum,

        // in this case ECMA6 make: key -> replace, value-> function replace;
    };

    for (let line of input) {
        if (line === "Finish") {
            break;
        }

        let tokens = line.split(" ");
        let command = tokens.shift().toLowerCase();

        commandParser[command](...tokens);
    }

    function replace(currentChar, newChar) {
        //1. Replace with while loop, or:
        while (message.search(currentChar) != -1) {
            message = message.replace(currentChar, newChar);
        }
        //2. Replace with RegEx, or:
        //message = message.replace(new RegExp(currentChar, 'g'),newChar);

        //3. use this:
        //message.split(currentChar).join(newChar);
        // return message; - ne e zadylvitelen
        console.log(message);
    }


    function cut(startIndex, endIndex) {

        startIndex = +startIndex;
        endIndex = +endIndex;
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            message = message.substring(0, startIndex) + message.substring(endIndex + 1);
            console.log(message);

        } else {
            console.log("Invalid index");
        }
    }


    function make(type) {
        if (type === "Upper") {
            message = message.toUpperCase();
        } else {
            message = message.toLowerCase();
        }
        console.log(message);
    }

    // We can use search(return index) or includes(return boolean)
    function check(string) {
        if (message.includes(string)) {
            console.log('Yes');
        } else {
            console.log("No");
        }
    }


    function sum(startIndex, endIndex) {
        startIndex = +startIndex;
        endIndex = +endIndex;
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            let sum = 0;

            let substring = message.substring(startIndex, endIndex + 1);

            for (let i = 0; i < substring.length; i++) {
                let ascii = substring.charCodeAt(i);
                sum += ascii;
            }
            console.log(sum);

        } else {
            console.log("Invalid index");
        }
    }


    function indexIsValid(index) {
        return index >= 0 && index < message.length;
    }
}*/



//OR:

/*function solve() {
    let message = input.shift();

    for (let line of input) {
        if (line === "Finish") {
            break;
        }

        let tokens = line.split(" ");
        let command = tokens[0];

        switch (command) {
            case "Replace":
                replace(tokens[1], tokens[2])
                //if we use let command = tokens.shift(); 
                //      ||
                //      \/
                // replace(...tokens);
                break;
            case "Cut":
                cut(+tokens[1], +tokens[2]);
                break;
            case "Make":
                make(tokens[1]);
                break;
            case "Check":
                check(tokens[1]);
                break;

            case "Sum":
                sum(+tokens[1], +tokens[2]);
                break;

        }
    }

    function replace(currentChar, newChar) {
        //1. Replace with while loop, or:
        while (message.search(currentChar) != -1) {
            message = message.replace(currentChar, newChar);
        }
        //2. Replace with RegEx, or:


        //3. use this:
        //message.split(currentChar).join(newChar);
        // return message; - ne e zadylvitelen
        console.log(message);
    }


    function cut(startIndex, endIndex) {
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            message = message.substring(0, startIndex) + message.substring(endIndex + 1);
            console.log(message);

        } else {
            console.log("Invalid index");
        }
    }


    function make(type) {
        if (type === "Upper") {
            message = message.toUpperCase();
        } else {
            message = message.toLowerCase();
        }
        console.log(message);
    }

    // We can use search(return index) or includes(return boolean)
    function check(string) {
        if (message.includes(string)) {
            console.log('Yes');
        } else {
            console.log("No");
        }
    }


    function sum(startIndex, endIndex) {
        if (indexIsValid(startIndex) && indexIsValid(endIndex)) {
            let sum = 0;

            let substring = message.substring(startIndex, endIndex + 1);

            for (let i = 0; i < substring.length; i++) {
                let ascii = substring.charCodeAt(i);
                sum += ascii;
            }
            console.log(sum);

        } else {
            console.log("Invalid index");
        }
    }


    function indexIsValid(index) {
        return index >= 0 && index < message.length;
    }
}*/
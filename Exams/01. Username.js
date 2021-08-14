function solve(input) {

    let username = input.slice(0, 1)[0];
    const commands = input.slice(1);

    for (let commandLine of commands) {
        [cmd, paramOne, paramTwo] = commandLine.split(' ');

        switch (cmd) {
            case 'Case':
                username = getRightCase(paramOne, username);
                break;
            case 'Reverse':
                reversePartOfUsername(paramOne, paramTwo, username);
                break;
            case 'Cut':
                username = cutTheUsername(paramOne, username);
                break;
            case 'Replace':
                username = replaceWithGivenChar(paramOne,username);
                break;
            case 'Check':
                checkUsername(paramOne, username);
                break;
            


        }
    }

    function getRightCase(currentCase, username) {
        if (currentCase == 'lower') {
            username = username.toLowerCase();

        } else {
            username = username.toUpperCase();
        }

        console.log(username);
        return username; // za da move da se prezapishe.
    }

    function reversePartOfUsername(startIndex, endIndex, username) {

        if ((+startIndex < 0 && +startIndex > username.length - 1) || (+startIndex < +endIndex && +endIndex > username.length - 1)) {
            return;
        }

        const substring = username.substring(+startIndex, +endIndex + 1).split('').reverse().join('');
        console.log(substring);
    }

    function cutTheUsername(substring, username) {
        if (!username.includes(substring)) {
            console.log((`${username} ${substring} No`));
        } else {
            let index = username.indexOf(substring);
            username = username.substring(0,index) +username.substring(index+substring.length);

            console.log(username);
        }

        return username;
    }
  
    function replaceWithGivenChar(char,username){
         
        const pattern = new RegExp(char,'g');
        username = username.replace(pattern,'*');
        console.log(username);
        return username;
    }

    function checkUsername(char, username){
        if(!username.includes(char)){
            console.log('He is not suitable for the position.');
        }else{
            console.log(('He is suitable for the position'));
        }
    }
}
solve(['Kiril Petkov', 'Case lower', 'Cut MINISTER:', 'Check citizenship', 'Sign up']);
console.log("---");
solve(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up']);


/*function solve(input) {

    let username = input.slice(0, 1)[0];
    const commands = input.slice(1);

    for (let commandLine of commands) {
        [cmd, paramOne, paramTwo] = commandLine.split(' ');

        switch (cmd) {
            case 'Case':
                username = getRightCase(paramOne, username);
                break;
            case 'Reverse':
                reversePartOfUsername(paramOne, paramTwo, username);
                break;
            case 'Cut':
                username = cutTheUsername(paramOne, username);
                break;
            case 'Replace':
                username = replaceWithGivenChar(paramOne,username);
                break;
            case 'Check':
                checkUsername(paramOne, username);
                break;
            


        }
    }

    function getRightCase(currentCase, username) {
        if (currentCase == 'lower') {
            username = username.toLowerCase();

        } else {
            username = username.toUpperCase();
        }

        console.log(username);
        return username; // za da move da se prezapishe.
    }

    function reversePartOfUsername(startIndex, endIndex, username) {

        if ((+startIndex < 0 && +startIndex > username.length - 1) || (+startIndex < +endIndex && +endIndex > username.length - 1)) {
            return;
        }

        const substring = username.substring(+startIndex, +endIndex + 1).split('').reverse().join('');
        console.log(substring);
    }

    function cutTheUsername(substring, username) {
        if (!username.includes(substring)) {
            console.log((`${username} ${substring} No`));
        } else {
            let index = username.indexOf(substring);
            username = username.substring(0,index) +username.substring(index+substring.length);

            console.log(username);
        }

        return username;
    }
  
    function replaceWithGivenChar(char,username){
         
        const pattern = new RegExp(char,'g');
        username = username.replace(pattern,'*');
        console.log(username);
        return username;
    }

    function checkUsername(char, username){
        if(!username.includes(char)){
            console.log(char);
        }else{
            console.log(("Valid"));
        }
    }
}*/
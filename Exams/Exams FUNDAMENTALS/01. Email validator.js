function solve(input) {

    let email = input.shift();
    input.pop(); //za da ne ni prechi


    for (const line of input) {
        let lineArr = line.split(' ');
        let command = lineArr[0];
        let argument = lineArr[1];

        // or let [command, argument] = line .split(' ');

        switch (command) {
            case 'Make': //Lower, Upper
                email = make(email, argument);
                console.log(email);
                break;

            case 'GetDomain':
                let domain = getDomain(email, argument);
                console.log(domain);
                break;

            case 'GetUsername':
                userName = printUserName(email);
                // if we use "includes" here wil be only 
                // printUserName(email);
                // !!! without let userName....
                
                break;

            case 'Replace':
                email = replaceCharacter(email, argument); //za da zapemeti rezultata, za razlika  ot gorniq case
                console.log(email);
                break;

            case 'Encrypt':
                printEncryptedEmail(email);
                break;


        }


    }

    function make(text, argument) {
        return argument == 'Upper' ?
            text.toUpperCase() :
            text.toLowerCase();
    }

    function getDomain(email, argument) {
        let count = +argument;
        let domain = email.substring(email.length - count)
        return domain;
    }

    function printUserName(email) {

        let atIndex = email.indexOf('@')
        let username ="";
        //let username = email.substring(0,email.indexOf('@'));
        if (atIndex > -1) {
            username = email.substring(0, atIndex);
        }
        console.log(username);
        // or 
        //if(email.includes('@')){
        //    let username = email.substring(0, atIndex);  
        // console.log(username);
        //}else{
        //     console.log(`The email ${email} doesn't contain the @ symbol.`);
        // }

        // !!!! without "return"!
        return username;
    }

    function replaceCharacter(email, char) {
        // let replacedEmail = email.replace(char, '-'); raboti samo za edna smqna, pyrvata!
        let replacedEmail = email;

        // to change every char:
        while (replacedEmail.includes(char)) {
            replacedEmail = replacedEmail.replace(char, '-');
        }
        return replacedEmail;
    }

    function printEncryptedEmail(email) {
        //let result = email.split('').forEach.map(x => x.charCodeAt(0)).join('');
        //console.log(result);
        // or:
        let result = '';
        for (let index = 0; index < email.length; index++) {
             result += email.charCodeAt(index) + " ";
    }
    console.log(result);
        }
    

}
solve(['Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
]);



// ako imame function(x) 
// ...
// function  case 'Make Upper':
// email = makeUpper(email)
// break;
// }

// function makeUpper(text){
// return text;
// }
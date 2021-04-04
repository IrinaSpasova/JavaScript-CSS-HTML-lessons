function data(input) {
    let username = input[0];
    let password = input[1];
    let data = input[2]; /*За да е вярна логически трябва да е input[counter]*/
    let counter = 3;

    while (data !== password) {
        data = input[counter];
        // console.log("Enter new password");
        counter++;
           
        }
        console.log("Welcome " + username + "!");
    }





data(["Gosho",
"secret",
"secret"])
;



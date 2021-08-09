function solve(input) {
    input.shift();
    let registrations = input;
    let successCount = 0;
   // let pattern = /U\$(?<user>[A-Z][a-z]{2,})U\$P@\$(?<pass>[A-Za-z]{5}\d+)P@\$/;
    for (const registration of registrations) {

        if (registration.trim().length <1){
            continue;
        }
        let pattern = /U\$(?<user>[A-Z][a-z]{2,})U\$P@\$(?<pass>[A-Za-z]{5}\d+)P@\$/g; // za da restartira exec broqcha
        // exec === regex.exec(string); (regex metod) or matchAll === string.matchAll(regex);(string metod)
        let match = pattern.exec(registration);
        if (result) {

            successCount++;
            console.log('successful registration');
            console.log(`Username${match.groups.user}, Password ${match.groups.pass}`);
            // or:
            // console.log(`Username${match[1], Password ${match[2]}`);
        }else{
            console.log("Invalid");
        }

        console.log(successCount);
    }


    console.log(successCount);
    // const validate = function(registration){
    //     return true;
    // }
}
function data(a, b, c) {
    let result = "";
    for (let i = 0; i < a.length; i++) {
        
        if (a[i] == "_") {
            result += b;
        } else {
            result += a[i];
        }
    }
    if (result === c) {
        console.log(result);
    } else {
        console.log("No");
    }


}
data('Str_ng', 'I', 'Strong')


/*Stava i s :
function solve(str, char, result){
    let res = str.replace("_",char);
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output);
}
*/

function solve(arr) {

    let str = arr.shift();
    for (const line of arr) {
        let [comm, a, b] = line.split(`:|:`);
if (comm == "Reveal"){
    console.log(`You have a new text message: ${str}`);
    return;
}
        if (comm == `InsertSpace`) {
            str = str.substring(0, +a) + " " + str.substring(+a);
        } else if (comm == "Reverse") {
            if (str.includes(a)) {
                let i = str.indexOf(a);
                let reversed = a.split('').reverse().join("");
                str = str.substring(0, i) + str.substring(i + a.length) + reversed;
               

            } else {
                console.log("error");
                continue;
            }
        } else if (comm == "ChangeAll") {
            let i = str.indexOf(a);
            while(i!= -1){

                str = str.substring(0, i) + b + str.substring(i+a.length);

                i = str.indexOf(a);
            }
        }
console.log(str);
    }

}
solve([
    '1agugu2',
    'ChangeAll:|:agugu:|:vs',
    'Reveal'
  ]);

//str.substring(i+a.length)
function data(input) {
    let password = input.shift();

    input.forEach(line => {
        if (line !== "Done") {
            let [command, ...tokens] = line.split(' ');
            if (command === 'TakeOdd') {
                password = [...password]
                    .filter((s, i) => i % 2 !== 0)
                    .join('');
                console.log(password);
            } else if (command === 'Cut') {
                let index = +tokens[0];
                let length = +tokens[1];
                let string = password.substring(index, index + length);
                //or password.substring(index,index+length)
                password = password.replace(string, '');
                console.log(password);
            } else if (command === 'Substitute') {
                let [substring, substitute] = tokens;
                if (password.includes(substring)) {
                    password = password.replace(new RegExp(`${substring}`, 'g'), substitute);
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }

            }
        }
    })

console.log(`Your password is: ${password}`);

}
data(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy', 'TakeOdd', 'Cut 18 2', 'Substitute ! ***', 'Substitute ? .!.', 'Done'])
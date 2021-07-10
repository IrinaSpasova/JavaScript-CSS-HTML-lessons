function solve(input= []) {
    input.pop();
    let weapon = input.shift().split('!'); /// return array

    const moveLeft = (index) => {
        let tempIndex = index - 1;

        if (index >= 0 && index < weapon.length && tempIndex >= 0) {
            let temp = weapon[tempIndex];
            weapon[tempIndex] = weapon[index];
            weapon[index] = temp;

            // or splice
        }
    }

    const moveRight = (index) => {
        let tempIndex = index + 1;

        if (index >= 0 && index < weapon.length && tempIndex <= weapon.length - 1) {
            let temp = weapon[tempIndex];
            weapon[tempIndex] = weapon[index];
            weapon[index] = temp;

            // or splice
        }
    }

    const checkEven = () => {
        let output = '';
        for (let i = 0; i < weapon.length; i += 2) { // 0 because we look for even
            output += `${weapon[i]} `;
        }
        console.log(output.trim()); // or return
    }

    const checkOdd = () => {
        let output = '';
        for (let i = 1; i < weapon.length; i += 2) { // 1 because we look for odd
            output += `${weapon[i]} `;
        }
        console.log(output.trim()); // or return
    }

    for (const line of input) {
        let tokens = line.split(' ');
       //let command = `${tokens[0]}${tokens[1]}`
       // and if starts with if(command ===="Move ..."{}...)

        if (tokens.length === 3 && tokens[1].includes('Left')) {
            moveLeft(Number(tokens[2]));
        } else if (tokens.length === 3 && tokens[1].includes('Right')) {
            moveRight(Number(tokens[2]));
        } else if (tokens.length === 2 && tokens[1].includes('Even')) {
            checkEven();
        } else if (tokens.length === 2 && tokens[1].includes('Odd')) {
            checkOdd();
        } 
        
    }
    console.log(weapon.join(''));
}
solve();
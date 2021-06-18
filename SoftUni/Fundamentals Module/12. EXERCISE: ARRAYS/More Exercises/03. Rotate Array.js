function rotateArray(input) {
    let rotations = Number(input.pop());
    rotations %= input.length; //за да не върти напразно през цикли, които се повтарят като резултат.

    for(let i=0; i<rotations; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple',`Pear`, '15']);
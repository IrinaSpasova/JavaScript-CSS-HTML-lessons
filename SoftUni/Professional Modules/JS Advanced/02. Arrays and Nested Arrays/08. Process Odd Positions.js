function data(input) {
    input = input.reverse();
    let result = [];
debugger;
    for (let i = 1; i <= input.length; i++) {
        if (input[i] % 2 !== 0) {
            result.push(input[i] * 2);
        }
    }

    console.log(result.join(" "));

}
data([3, 0, 10, 4, 7, 3]);


//or
function foo(arr) {
    return arr
        .filter((_, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
}


// or

//i+=2 за да даде само нечетните.
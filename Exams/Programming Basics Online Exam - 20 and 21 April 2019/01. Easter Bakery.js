function data(input) {
    let a = ((Number(input[0]) * Number(input[1])));
    let c = (Number(input[2]) * (Number(input[0]) * 0.75));
    let b = (Number(input[3]) * (Number(input[0] * 1.1)));
    let d = (Number(input[4]) * ((Number(input[0]) * 0.75) * 0.2));
    console.log((a + b + d + c).toFixed(2));


}
data(["50",
    "10",
    "3.5",
    "6",
    "1"
])
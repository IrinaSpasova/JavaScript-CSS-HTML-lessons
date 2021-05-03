/*p1 = 7.0 / 10 * 100 = 70.00%*/

function data(input) {
    let count = Number(input[0]);
    let counter2 = 0;
    let counter3 = 0;
    let counter4 = 0;

    for (let i = 1; i <= count; i++) {
        let number = Number(input[i]);
        if (number % 2 === 0) {
            counter2++;
        }
        if (number % 3 === 0) {
            counter3++;
        }
        if (number % 4 === 0) {
            counter4++;
        }
    }
console.log(((counter2/count)*100).toFixed(2)+"%");
console.log(((counter3/count)*100).toFixed(2)+"%");
console.log(((counter4/count)*100).toFixed(2)+"%");

}
data(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"
])
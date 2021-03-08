function data(input) {
    /*формулата за лице на триъгълник: area = a * h / 2*/

    let a = Number(input[0]);
    let h = Number(input[1]);

    /*LOGIC*/
    let area = a * h / 2;

    console.log(area.toFixed(2));
}
data(["7.75", "8.45"])
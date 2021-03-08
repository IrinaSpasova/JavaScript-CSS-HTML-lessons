function data(input) {
    /*Лице = π * r * r
    Периметър = 2 * π * r
    d = 2 * r 
    */

    let r = Number(input[0]);

    /*LOGIC*/

    let s = Math.PI * r * r;
    let p = 2 * Math.PI * r;

    console.log(`${s.toFixed(2)}`);
    console.log(`${p.toFixed(2)}`);
}
data(["3"]);
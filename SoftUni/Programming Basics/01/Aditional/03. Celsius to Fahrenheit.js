function data(input) {
    /*Formula	
    (0°C × 9/5) + 32 = 32°F
    */
    let celsius = Number(input[0]);

    /*LOGIC*/
    let fahrenheit = (celsius * (9 / 5)) + 32;
    console.log(fahrenheit.toFixed(2));
}
data(["0"])
function yardGreening(input) {
    let yard = Number(input[0]);
    let price = yard*7.61;
    let rabatt = price*0.18;
    let finalPrice = price-rabatt;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${rabatt} lv.`)
}
yardGreening(["150"])

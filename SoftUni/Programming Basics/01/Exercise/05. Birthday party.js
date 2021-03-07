function demo(input) {

    let rent = Number(input[0]);
    let cakePrice = rent * 0.20;
    let drinksPrice = cakePrice * 0.55; /* защото изваждаме 0,45*/
    let animatorPrice = rent / 3;
    let finalResult = rent + cakePrice + drinksPrice + animatorPrice;
    console.log(finalResult);
}
demo(["2250"]);
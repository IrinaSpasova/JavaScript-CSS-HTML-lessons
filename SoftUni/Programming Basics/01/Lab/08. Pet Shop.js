function petShop(input) {
    let dogs = Number(input[0]);
    let other = Number (input[1]);
    let dogfood = dogs*2.5;
    let otherfood = other*4;
    let total = dogfood+otherfood;
    console.log(`${total} lv.`);
}
petShop(["13","9"])
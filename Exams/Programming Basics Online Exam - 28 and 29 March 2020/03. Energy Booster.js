function data(input) {
    let fruit = input[0];
    let size = input[1];
    let count = Number(input[2]);


    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (size == "small") {
                price += (56 * 2) * count;
            } else {
                price += (28.70 * 5) * count;
            }
            break;

        case "Mango":
            if (size == "small") {
                price += (36.66 * 2) * count;
            } else {
                price += (19.6 * 5) * count;
            }
            break;

        case "Pineapple":
            if (size == "small") {
                price += (42.1 * 2) * count;
            } else {
                price += (24.8* 5) * count;
            }
            break;

        case "Raspberry":
            if (size == "small") {
                price += (20 * 2) * count;
            } else {
                price += (15.2 * 5) * count;
            }
            break;
    }
if(price>=400 && price<=1000){
    console.log(`${(price*0.85).toFixed(2)} lv.`);;
}else if(price>1000){
    console.log(`${(price*0.50).toFixed(2)} lv.`);
}else{
    console.log(`${(price).toFixed(2)} lv.`);
}
}
data(["Watermelon",
"big",
"4"])

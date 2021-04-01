function data(input) {
    let count = Number(input[0]);



    /*LOGIC*/
    let price = 0;
    let train = 0;
    let bus = 0;
    let truck = 0;
    let loadCount = 0;
    for (let i = 1; i <= count; i++) {
        let weight = Number(input[i]);

        if (weight <= 3) {
            bus += weight;
            price += 200 * weight;
            loadCount += weight;
        } else if (weight <= 11) {
            truck += weight;
            price += 175 * weight;
            loadCount += weight;
        } else if (weight >= 12) {
            train += weight;
            price += 120 * weight;
            loadCount += weight;
        }
    }
    console.log((price / loadCount).toFixed(2));
    console.log(`${(bus/loadCount*100).toFixed(2)}%`);
    console.log(`${(truck/loadCount*100).toFixed(2)}%`);
    console.log(`${(train/loadCount*100).toFixed(2)}%`);


}
data([80, 2, 4, 12, 11])
function solve(input) {
    let actions = {

        "Rate": rate,
        "Update": update,
        "Reset": reset,
    };
    let catalog = {};
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let [name, rarity] = input.shift().split('<->');

        catalog[name] = {
            rarity: +rarity,
            ratings: [],
            avgRating: 0
        };
    }

    while (input[0] != "Exhibition") {
        let [command, params] = input.shift().split(': ');
        //console.log((command, '->', params));
        let action = actions[command];
        action(params);
        //console.log(action);

    }

  

    // sortirane

    let sorted = Object.entries(catalog).sort(comparePlants); // za da stane obekta masiv   
    // wajno za sortirowkata 1:10 ot lekciqta
function comparePlants(a,b){
    let rarityA = a[1].rarity;
    let rarityB = b[1].rarity;

    let ratingA = a[1].avgRating;
    let ratingB = b[1].avgRating;
    return (rarityB - rarityA) || (ratingB-ratingA);

}

console.log("Plants for the exhibition:")
for(let [name,plant] of sorted) {
    console.log( `- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
}
  

    function rate(line) {
        let [name, rating] = line.split(' - ');
        if (catalog[name] != undefined) {

            let plant = catalog[name];
            plant.ratings.push(+rating);

            let total = 0;
            for (let rating of plant.ratings) {
                total += rating;

            }
            plant.avgRating = total / plant.ratings.length;
        } else {
            console.log('error');
        }
    }


    function update(line) {
        let [name, rarity] = line.split(' - ');
        if (catalog[name] != undefined) {

            let plant = catalog[name];
            plant.rarity = (+rarity);

        } else {
            console.log('error');
        }
    }

    function reset(name) {
        if (catalog[name] != undefined) {
            catalog[name].ratings.length = 0 // най-лесния начин да изтрием елемент от масив;
            let plant = catalog[name];
            plant.avgRating = 0;
        } else {
            console.log('error');
        }
    }

}
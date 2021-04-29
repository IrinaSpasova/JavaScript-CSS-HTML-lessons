function data(input) {
    let movie = input[0];
    let type = input[1];
    let tickets = Number(input[2]);


    let sum = 0;
    switch (movie) {
        case "A Star Is Born":
            switch (type) {
                case "normal":
                    sum += tickets * 7.5;
                    break;
                case "luxury":
                    sum += tickets * 10.5;
                    break;
                case "ultra luxury":
                    sum += tickets * 13.5;
                    break;
            }
            break;

        case "Bohemian Rhapsody":
            switch (type) {
                case "normal":
                    sum += tickets * 7.35;
                    break;
                case "luxury":
                    sum += tickets * 9.45;
                    break;
                case "ultra luxury":
                    sum += tickets * 12.75;
                    break;
            }
            break;

        case "Green Book":
            switch (type) {
                case "normal":
                    sum += tickets * 8.15;
                    break;
                case "luxury":
                    sum += tickets * 10.25;
                    break;
                case "ultra luxury":
                    sum += tickets * 13.25;
                    break;
            }
            break;

        case "The Favourite":
            switch (type) {
                case "normal":
                    sum += tickets * 8.75;
                    break;
                case "luxury":
                    sum += tickets * 11.55;
                    break;
                case "ultra luxury":
                    sum += tickets * 13.95;
                    break;
            }
            break;
    }
console.log(`${movie} -> ${sum.toFixed(2)} lv.`)


}
data(["A Star Is Born", "luxury", 42])




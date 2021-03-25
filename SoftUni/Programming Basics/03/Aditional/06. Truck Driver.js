function data(input) {
    let season = input[0];
    let km = Number(input[1]);


    /*LOGIC*/

    let price = 0;
    
    if (km <= 5000) {
        switch ((season)) {
            case "Spring":
            case "Autumn":
                price = 0.75;
                break;
            case "Summer":
                price = 0.90;
                break;
            case "Winter":
                price = 1.05;
                break;

        }
    }else if (km > 5000 && km<= 10000) {
        switch ((season)) {
            case "Spring":
            case "Autumn":
                price = 0.95;
                break;
            case "Summer":
                price = 1.10;
                break;
            case "Winter":
                price = 1.25;
                break;

        }
    }else if (km > 10000 && km<= 20000) {
        switch ((season)) {
            case "Spring":
            case "Autumn":              
            case "Summer":              
            case "Winter":
                price = 1.45;
                break;

        }
    }

    let finalPrice = (price * km * 4)*0.90;
console.log(finalPrice.toFixed(2));
}
data(["Winter", "4350"])
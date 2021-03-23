function data(input) {
    let month = input[0];
    let nights = Number(input[1]);

    /*LOGIC*/
    let priceStudio = 0;
    let priceApartment = 0;
    let discountStudio = 0;
    let discountApartment = 0;

    switch (month) {
        case `May`:
        case `October`:
            priceStudio = 50;
            priceApartment = 65;
            break;
        case `June`:
        case `September`:
            priceStudio = 75.20;
            priceApartment = 68.70;
            break;
        case `July`:
        case `August`:
            priceStudio = 76;
            priceApartment = 77;
            break;
    }

    if (nights > 14 && (month === `May` || month === `October`)) {
        discountStudio = 0.3;
    } else if (nights > 14 && (month === `June` || month === `September`)) {
        discountStudio = 0.2;
    } else if (nights > 7 && (month === `May` || month === `October`)) {
        discountStudio = 0.05;
    }

    if (nights > 14) {
        discountApartment = 0.1;
    }

    let finalStudioPrice = priceStudio * nights * (1 - discountStudio);
    let finalApartmentPrice = priceApartment * nights * (1 - discountApartment);

    console.log(`Apartment: ${finalApartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${finalStudioPrice.toFixed(2)} lv.`);

}


/*   Джъдж не го приема 1:1 book */
/* let studioPrice = 50.00;
    let apartmentPrice = 65.00;
    let studioRent = 0.00;
    let apartmentRent = 0.00;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50.00;
            apartmentPrice = 65.00;

            studioRent = studioPrice * nights;
            apartmentRent = apartmentPrice * nights;
            if (nights > 14) {
                studioRent *= 0.70;
                apartmentRent *= 0.90;
            } else if (nights > 7) {
                studioRent *= 0.95;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;

            studioRent = studioPrice * nights;
            apartmentRent = apartmentPrice * nights;
            if (nights > 14) {
                studioRent *= 0.80;
                apartmentRent *= 0.90;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76.00;
            apartmentPrice = 77.00;

            studioRent = studioRent * nights;
            apartmentRent = apartmentPrice * nights;
            if (nights > 14) {
                apartmentRent *= 0.90;
            }
            break;
    }
    let studioInfo = "Studio: " + studioRent.toFixed(2) + " lv.";
    let apartmentInfo = "Apartment: " + apartmentRent.toFixed(2) + " lv.";

    console.log(studioInfo);
    console.log(apartmentInfo);
}*/
data(["June", "14"]);

/*function data(input) {
    let month = input[0];
    let sleep = Number(input[1]);*/


    /*LOGIC*/


  /*  let apartment = 0;
    let studio = 0;
    if (month === "May" || month === "October") {
        apartment = 65;
        studio = 50;
    } else if (month === "June" || month === "September") {
        apartment = 68.70;
        studio = 75.20;
    } else if (month === "July" || month === "August") {
        apartment = 77;
        studio = 76;
    }

    if (sleep > 14) {
        apartment *= 0.9;
        switch (month) {
            case "May":
            case "October":
                studio *= 0.7;
                break;
            case "June":
            case "September":
                studio*=0.8;
                break;
        }
    } else if (month === "May" || month === "October" && sleep > 7) {
        studio *= 0.95;
    }
    console.log(`Apartment: ${(sleep*apartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(sleep*studio).toFixed(2)} lv.`)
}*/
// function data(input) {
//     let city = input[0];
//     let type = input[1];
//     let rabat = input[2];
//     let days = Number(input[3]);

//     if (days > 7) {
//         days -= 1;
//     }

//     if (days<1){
//         console.log(`Days must be positive number!`);
//         return;
//     }

//     if (city!="Bansko"&&city!="Borovets"&&city!="Varna" && city!="Burgas"){
//         console.log(`Invalid input!`);
//         return;
//     }

//     if ((city =="Bansko" || city =="Borovets") && (type =="withBreakfast" ||type =="noBreakfast")){
//         console.log(`Invalid input!`);
//         return;
//     }
//     if((city =="Varna" || city =="Burgas") && (type =="withEquipment" ||type =="noEquipment")){
//         console.log(`Invalid input!`);
//         return;
//     }

//     let price = 0;
//     switch (city) {
//         case "Bansko":
//             switch (type) {
//                 case "withEquipment":
//                     if (rabat == "no") {
//                         price = 100;
//                     } else {
//                         price = 100 * 0.9;
//                     }
//                     break;
//                 case "noEquipment":
//                     if (rabat == "no") {
//                         price = 80;
//                     } else {
//                         price = 80 * 0.95;
//                     }
//                     break;
//             }

//             case "Borovets":
//                 switch (type) {
//                     case "withEquipment":
//                         if (rabat == "no") {
//                             price = 100;
//                         } else {
//                             price = 100 * 0.9;
//                         }
//                         break;
//                     case "noEquipment":
//                         if (rabat == "no") {
//                             price = 80;
//                         } else {
//                             price = 80 * 0.95;
//                         }
//                         break;
//                 }

//                 case "Varna":
//                     switch (type) {
//                         case "withBreakfast":
//                             if (rabat == "no") {
//                                 price = 130;
//                             } else {
//                                 price = 130 * 0.88;
//                             }
//                             break;
//                         case "noBreakfast":
//                             if (rabat == "no") {
//                                 price = 100;
//                             } else {
//                                 price = 100 * 0.93;
//                             }
//                             break;
//                     }

//                     case "Burgas":
//                         switch (type) {
//                             case "withBreakfast":
//                                 if (rabat == "no") {
//                                     price = 130;
//                                 } else {
//                                     price = 130 * 0.88;
//                                 }
//                                 break;
//                             case "noBreakfast":
//                                 if (rabat == "no") {
//                                     price = 100;
//                                 } else {
//                                     price = 100 * 0.93;
//                                 }
//                                 break;
//                         }

//     }

// console.log(`The price is ${(price*days).toFixed(2)}lv! Have a nice time!`)
// }

function data(input) {
    let city = input[0];
    let type = input[1];
    let rabat = input[2];
    let days = Number(input[3]);

    if (days > 7) {
        days -= 1;
    }
    if (days<1){
                console.log(`Days must be positive number!`);
                return;
            }
    if (city != "Bansko" && city != "Borovets" && city != "Varna" && city != "Burgas") {
        console.log(`Invalid input!`);
        return;
    }
    if (type != "noEquipment" && type != "withEquipment" && type != "noBreakfast" && type != "withBreakfast") {
        console.log(`Invalid input!`);
        return;
    }
    if (city == "Borovets" || city == "Bansko") {
        switch (type) {
            case "withEquipment":
                if (rabat == "no") {
                    price = 100;
                } else {
                    price = 100 * 0.9;
                }
                break;
            case "noEquipment":
                if (rabat == "no") {
                    price = 80;
                } else {
                    price = 80 * 0.95;
                }
                break;
        }
    }
    if (city == "Varna" || city == "Burgas") {
        switch (type) {
            case "withBreakfast":
                if (rabat == "no") {
                    price = 130;
                } else {
                    price = 130 * 0.88;
                }
                break;
            case "noBreakfast":
                if (rabat == "no") {
                    price = 100;
                } else {
                    price = 100 * 0.93;
                }
                break;
        }
    }

    console.log(`The price is ${(price*days).toFixed(2)}lv! Have a nice time!`)

}
data(["Gabrovo",
"noBreakfast",
"no",
"3"])



;
/*********************************/
           /* 1 */
/*********************************/

function data(input) {
    let product = input[0].toLowerCase();
    let town = input[1].toLowerCase();
    let count = Number(input[2]);


    /*LOGIC*/

    if (town === "sofia") {
        if (product === "coffee") {
            console.log(0.5 * count);
        }else if (product === "water") {
            console.log(count * 0.8);
        }else if (product === "beer") {
            console.log((count * 1.2));
        }else if (product === "sweets") {
            console.log(count * 1.45);
        }else if (product === "peanuts") {
            console.log(count * 1.6);
        }
    }
    if (town === "plovdiv") {
        if (product === "coffee") {
            console.log(0.4 * count);
        }else if (product === "water") {
            console.log(count * 0.7);
        }else if (product === "beer") {
            console.log(count * 1.15);
        }else if (product === "sweets") {
            console.log(count * 1.3);
        }else if (product === "peanuts") {
            console.log(count * 1.5);
        }
    }
    if (town === "varna") {
        if (product === "coffee") {
            console.log(0.45 * count);
        } else if (product === "water") {
            console.log(count * 0.7);
        } else if (product === "beer") {
            console.log(count * 1.1);
        } else if (product === "sweets") {
            console.log(count * 1.35);
        } else if (product === "peanuts") {
            console.log(count * 1.55);
        }

    }

}

/*******************************************/
              /* 2 */
/*******************************************/
function data(input) {
    let product = input[0];
    let town = input[1];
    let count = Number(input[2]);
   let result = 0;

    /*LOGIC*/
    switch (town) {
        case "Sofia":
            switch (product) {
                case "coffee":
                    result = count * 0.5;
                    break;
                case "water":
                    result = count * 0.8;
                    break;
                case "beer":
                    result = count * 1.2;
                    break;
                case "sweets":
                    result = count * 1.45;
                    break;
                case "peanuts":
                    result = count * 1.6;
                    break;
                    
            }
            break;
            case "Plovdiv":
                switch (product) {
                    case "coffee":
                        result = count * 0.4;
                        break;
                    case "water":
                        result = count * 0.7;
                        break;
                    case "beer":
                        result = count * 1.15;
                        break;
                    case "sweets":
                        result = count * 1.3;
                        break;
                    case "peanuts":
                        result = count * 1.5;
                        break;
                        
                }
                break;
                case "Varna":
                    switch (product) {
                        case "coffee":
                            result = count * 0.45;
                            break;
                        case "water":
                            result = count * 0.7;
                            break;
                        case "beer":
                            result = count * 1.1;
                            break;
                        case "sweets":
                            result = count * 1.35;
                            break;
                        case "peanuts":
                            result = count * 1.55;
                            break;
                    }
                    break;


    }
console.log(result);
}






/****************************************/
        /* 3 */
/****************************************/


/*function data(input) {
    let product = input[0].toLowerCase();
    let town = input[1].toLowerCase();
    let count = Number(input[2]);


    /*LOGIC*/

 /*   if (town === "sofia") {
        if (product === "coffee") {
            console.log((0.5 * count).toFixed(2));
        }else if (product === "water") {
            console.log((count * 0.8).toFixed(2));
        }else if (product === "beer") {
            console.log((count * 1.2).toFixed(2));
        }else if (product === "sweets") {
            console.log((count * 1.45).toFixed(2));
        }else if (product === "peanuts") {
            console.log((count * 1.6).toFixed(2));
        }
    }
    if (town === "plovdiv") {
        if (product === "coffee") {
            console.log((0.4 * count).toFixed(2));
        }else if (product === "water") {
            console.log((count * 0.7).toFixed(2));
        }else if (product === "beer") {
            console.log((count * 1.15).toFixed(2));
        }else if (product === "sweets") {
            console.log((count * 1.3).toFixed(2));
        }else if (product === "peanuts") {
            console.log((count * 1.5).toFixed(2));
        }
    }
    if (town === "varna") {
        if (product === "coffee") {
            console.log((0.45 * count).toFixed(2));
        } else if (product === "water") {
            console.log((count * 0.7).toFixed(2));
        } else if (product === "beer") {
            console.log((count * 1.1).toFixed(2));
        } else if (product === "sweets") {
            console.log((count * 1.35).toFixed(2));
        } else if (product === "peanuts") {
            console.log((count * 1.55).toFixed(2));
        }

    }

}*/

data(["coffee",
            "Varna",
            "2"
        ]);

/* switch (town) {
                 case "Sofia":
                     switch (product) {
                         case "coffee":
                             result = count * 0.5;
                             break;
                         case "water":
                             result = count * 0.8;
                             break;
                         case "beer":
                             result = count * 1.2;
                             break;
                         case "sweets":
                             result = count * 1.45;
                             break;
                         case "peanuts":
                             result = count * 1.6;
                             break;
                             
                     }
                     break;
                     case "Plovdiv":
                         switch (product) {
                             case "coffee":
                                 result = count * 0.4;
                                 break;
                             case "water":
                                 result = count * 0.7;
                                 break;
                             case "beer":
                                 result = count * 1.15;
                                 break;
                             case "sweets":
                                 result = count * 1.3;
                                 break;
                             case "peanuts":
                                 result = count * 1.5;
                                 break;
                                 
                         }
                         break;
                         case "Varna":
                             switch (product) {
                                 case "coffee":
                                     result = count * 0.45;
                                     break;
                                 case "water":
                                     result = count * 0.7;
                                     break;
                                 case "beer":
                                     result = count * 1.1;
                                     break;
                                 case "sweets":
                                     result = count * 1.35;
                                     break;
                                 case "peanuts":
                                     result = count * 1.55;
                                     break;
                             }
                             break;


             }


            

        }

        data(["coffee",
            "Varna",
            "2"
        ])*/

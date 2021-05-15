function data(input){

    
        let size = input[0];
        let color = input[1];
        let count = Number(input[2]);
    
        let price = 0;
        switch (size) {
            case "Large":
                switch (color) {
                    case "Red":
                        price = 16;
                        break;
                    case "Green":
                        price = 12;
                        break;
                    case "Yellow":
                        price=9;
                        break;
                }
                break;
    
                case "Medium" :
                switch (color) {
                    case "Red":
                        price = 13;
                        break;
                    case "Green":
                        price = 9;
                        break;
                    case "Yellow":
                        price=7;
                        break;
                }
                break;
    
                case "Small":
                switch (color) {
                    case "Red":
                        price = 9;
                        break;
                    case "Green":
                        price = 8;
                        break;
                    case "Yellow":
                        price=5;
                        break;
                }
                break;
        }
    console.log(`${((price*count)*0.65).toFixed(2)} leva.`)
    
    }
data(["Small",
"Yellow",
"3"])

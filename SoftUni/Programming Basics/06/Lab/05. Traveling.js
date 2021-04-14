function data(input) {
    let destination = input[0];
    let cost = Number(input[1]);

    /*LOGIC*/
    let counter = 0;
    while (input[counter] !== "End") {
      
        if (isNaN(input[counter])) {
            destination = input[counter];
            cost = Number(input[counter + 1]);
            counter += 2;
            let savings = 0;
            while (input[counter] !== "End") {
                savings += Number(input[counter]);
                
                if (savings >= cost) {
                    console.log(`Going to ${destination}!`);
                    break;
                } else if (isNaN(input[counter])) {
                    break;
                }
                counter++;
            }
            
        }
        if(input[counter] === "End"){
            break;
        }
        counter++;
    }

}
data(["France","2000","300","300","200","400","190","258","360","Portugal","1450","400","400","200","300","300","Egypt","1900","1000","280","300","500","End"]);


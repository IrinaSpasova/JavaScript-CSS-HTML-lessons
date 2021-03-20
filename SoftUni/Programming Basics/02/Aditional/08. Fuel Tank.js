function data(input) {
    let fuel = input[0];
    let count = Number(input[1]);

    /*LOGIC*/


    if (fuel === "Diesel" || fuel === "Gas" || fuel === "Gasoline") {
        if (count >= 25) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
            
        } else {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }

    }else{
        console.log("Invalid fuel!");
    }


}

/*   if (fuel === "Diesel" && count >= 25) {
        console.log("You have enough diesel.");
    } else if (count<25) {
        console.log("Fill your tank with diesel!");
    }

    if (fuel === "Gasoline" && count >= 25) {
        console.log("You have enough gasoline.");
    } else if (count<25) {
        console.log("Fill your tank with gasoline!");
    }

    if (fuel === "Gas" && count >= 25) {
        console.log("You have enough gas.");
    } else if (count<25){
        console.log("Fill your tank with gas!");
    }

    if (fuel != "Diesel" || fuel !="Gasoline" || fuel !="Gas") {
        console.log("Invalid fuel!");
    }

}*/
data(["jli", "15"])
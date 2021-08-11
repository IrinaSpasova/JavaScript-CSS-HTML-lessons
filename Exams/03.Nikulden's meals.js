// What kinda of object will I use?
// Parse commands;
// Sort Object;


function solve(input) {
    //=> key : Gest name (string), value => meals(arr)
    let allGuests = {

    }
    let unlikeMeals = 0;

    for (let line of input) {
        if (line === "Stop") {
            break;
        }

        // this:
        // let tokens = line.split('-');
        // let commands = tokens[0];
        // let gest = tokens[1];
        // let meal = tokens[2];
        //or
        //DESTRUCTURING 
        let [command, guest, meal] = line.split('-');
        if (command === 'LIke') {

            like[ guest, meal];
        } else {
            unlike(guest, meal);
        }

    }

    // SORT ! can not use sort on objects (only for array)

let sortedGuests = Object.entries(allGuests)
 .sort(sortGuests);

function sortGuests(g1,g2){
let [guestAName, guestAMeals ] = g1;
let [guestBName, guestBMeals ] = g2;
let firstCriteria = guestBMeals.length-guestAMeals.length;
let secondCriteria ;

if (firstCriteria === 0){
    return guestAName.localeCompare(guestBName);
}

return firstCriteria;
}



    function unlike(guest, meal) {
        if (!allGuests.hasOwnProperty(guest)) {
            console.log('no');
            return;
        }
        let likedMeals = allGuests[guest];
        if (likedMeals.includes(meal)) {
            //remove
            let indexOfMeal = likedMeals.indexOfMeal(meal);
            likedMeals.splice(indexOfMeal, 1);
            unlikeMeals++;
            console.log("Guest do not like this meal");
        } else {
            console.log(gest, "no");
        }

    }

    function like(guest, meal) {

        if (!allGuests.hasOwnProperty(guest)) {
            allGuests[gest] = [];

        }

        let likedMeals = allGuests[guest];

        if (!likeMeals.includes(meal)) {
            likedMeals.push(meal);
        }

    }


}
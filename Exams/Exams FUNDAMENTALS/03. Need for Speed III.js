function solve(arr) {
    let n = Number(arr.shift());
    let fuelObj = {};
    let mileObj = {};

    //{car}|{mileage}|{fuel}

    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = arr.shift().split('|');
        fuelObj[car] = Number(fuel);
        mileObj[car] = Number(mileage);

    }
    //•	Drive : {car} : {distance} : {fuel} 

    for (const line of arr) {
        let [command, car, distance, fuel] = line.split(` : `);
        fuel = +fuel;
        distance = +distance;

        if (command == 'Stop') {
            Object.keys(fuelObj)
            .sort((a,b) => mileObj[b] - mileObj[a] || a.localeCompare(b))
            .forEach( car => {
                console.log(`${car} -> Mileage: ${mileObj[car]} kms, Fuel in the tank: ${fuelObj[car]} lt.`);
            });
         break; 
        }

        if (command == "Drive") {
            if (fuelObj[car] < fuel) {
                console.log("Not enough fuel to make that ride");

            } else {
                mileObj[car] += distance;
                fuelObj[car] -= fuel;

                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                if (mileObj[car] >= 100000) {
                    delete fuelObj[car];
                    delete mileObj[car];
                    console.log(`Time to sell the ${car}!`);
                }

            }
        } else if (command == `Refuel`) {

            fuel = +distance;

            let refuel = fuelObj[car] + fuel > 75 ?
                75 - fuelObj[car] :
                fuel;
            fuelObj[car] += fuel;
            if(fuelObj[car]  > 75){
                fuelObj[car]=75;
            }
            console.log(`${car} refueled with ${refuel} liters`);

        } else if (command == `Revert`) {
            mileObj[car] -= distance;

            if (mileObj[car] < 10000) {
                mileObj[car] = 10000;
                continue;
            }
            console.log(`${car} mileage decreased by ${distance} kilometers`);
        }

    }

    //"{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."

    // Object.keys(fuelObj)
    // .sort((a,b) => mileObj[b] - mileObj[a] || a.localeCompare(b))
    // .forEach( car => {
    //     console.log(`${car} -> Mileage: ${mileObj[car]} kms, Fuel in the tank: ${fuelObj[car]} lt.`);
    // });

}


solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  );
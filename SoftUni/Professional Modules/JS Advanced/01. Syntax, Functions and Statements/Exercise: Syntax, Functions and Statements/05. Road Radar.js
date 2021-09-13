function data(speed, area) {
    speed = +speed;
    switch (area) {
        case 'motorway':
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            } else {
                let limit = speed - 130;
                console.log(`The speed is ${limit} km/h faster than the allowed speed of 130 - ${status(limit)}`);
            }
            break;
        case 'interstate':
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            } else {
                let limit = speed - 90;
                console.log(`The speed is ${limit} km/h faster than the allowed speed of 90 - ${status(limit)}`);
            }
            break;

        case 'city':
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            } else {
                let limit = speed - 50;
                console.log(`The speed is ${limit} km/h faster than the allowed speed of 50 - ${status(limit)}`);
            }
            break;

        case 'residential':
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            } else {
                let limit = speed - 20;
                console.log(`The speed is ${limit} km/h faster than the allowed speed of 20 - ${status(limit)}`);
            }
            break;
    }


    function status(limit) {
        if (limit <= 20) {
            return "speeding";
        }

        if (limit > 20 && limit <= 40) {
            return "excessive speeding";
        }

        if (limit > 40) {
            return "reckless driving";
        }
    }


}
data(40, 'city')



// or

/*function foo(speed, area) {
    const limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    }
    const getStatus = n => {
        const status = {
            [n > 40]: "reckless driving",
            [n > 20 && n <= 40]: "excessive speeding",
            [n <= 20]: "speeding",
        }

        return status["true"]
    }
    const speedDiff = speed - limits[area]

    return speedDiff > 0
        ? `The speed is ${speedDiff} km/h faster than the allowed speed of ${limits[area]} - ${getStatus(speedDiff)}`
        : `Driving ${speed} km/h in a ${limits[area]} zone`
}*/

function solve(input) {
    input.shift();

    let pattern = /^!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]$/g;

    // OR
    //new RegExp('^!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]$', 'g');
    // ako imame regex, kojto zawisi ot promenliwa, polzwame regEXP!

    for (let line of input) {
        let matches = [...line.matchAll(pattern)][0];
        // if undefined -> falsy, array with 1 element -> truthy
        if (matches) {
            let command = matches[1];
            let message = matches[2];

            let asciiSymbols = [...message]
            .map(s => s.charCodeAt(0))
            .join(' ');

            console.log(`${command}: ${asciiSymbols}`);
            
        } else {
            console.log('invalid');
        }

        console.log((matches));
    }
    // mnogo flagowe 'gim', ne kato otdelni parametri 'g','i', 'm' !
}

// /!([A-Z][a-z]{2,})!:\{([A-Za-z]{8,})}/g

// връщане на итератора в масив:

//[...text.matchAll(/!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})]/g)];

// or

// Array.from(text.matchAll(/!([A-Z][a-z]{2,})!:\{([A-Za-z]{8,})}/g));
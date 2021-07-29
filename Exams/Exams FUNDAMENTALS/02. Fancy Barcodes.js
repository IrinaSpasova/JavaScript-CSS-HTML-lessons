function solve(input) {
    input.shift();
    let regex = /(@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(@#{1,})/;

    //console.log(regex.test(input[0]));
    //regex ima pointers, два консол лог, ще дадат true false.
    //let secondRegex = new RegExp(`(\@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(\@#{1,})`,`g`)
    // console.log(/(\@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(\@#{1,})/g.test(input[0]));
    // console.log(/(\@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(\@#{1,})/g.test(input[0]));
    // console.log(/(\@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(\@#{1,})/g.test(input[0]));
    // console.log(/(\@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(\@#{1,})/g.test(input[0]));

    input.forEach(line => {
        if (regex.test(line)) {
            let tokens = regex.exec(line);//може и line.match(regex) 
            let barcode = tokens[2];
            let numbers = [...barcode]
                .filter(symbol => /\d/g.test(symbol)) // or .filter(symbol => !isNaN(symbol))
                .join('');


            let productGroup = numbers === '' ?
                '00' :
                numbers;
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    })


}

solve([3,
    `@#FreshFisH@#`,
    `@###Brea0D@###`,
    `@##Che4s6E@##`
]);


//(@#+)([A-Z][A-Za-z0-9]{4,}[A-Z])+(@#+)
///(\@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(\@#{1,})/g  - No interpolation
//Ako tyrsim duma:
//with interpolation:
//let secondRegex = new RegExp(`(\@#{1,})([A-Z][A-Za-z\d]{4,}[A-Z])(\@#{1,})$(word)`,`g`)
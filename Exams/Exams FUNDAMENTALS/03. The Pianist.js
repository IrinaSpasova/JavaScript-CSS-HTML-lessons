function solve(input) {

    let n = +input.shift();
    let piecesArr = input.splice(0, n);

    let pieces = {};
    piecesArr.forEach(el => {
        let [name, composer, key] = el.split('|');
        pieces[name] = {
            composer,
            key
        };
    });

    let commands = {
        'Add': (piece, x, y) => {
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {
                    composer: x,
                    key: y,

                };
                console.log(`${piece} by ${x} in ${y} added to the collection!`);
            }
        },
        'Remove': (piece) => {
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        },
        'ChangeKey': (piece, x) => {
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = x;
                console.log(`Changed the key of ${piece} to ${x}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }




    for (const line of input) {
        //Sort
        if (line === 'Stop') {
            Object.keys(pieces)
                .sort((a, b) => a.localeCompare(b) || pieces[a].composer.localeCompare(pieces[b].composer))
                .forEach(p => {
                    console.log(`${p} -> Composer: ${pieces[p].composer}, Key: ${pieces[p].key}`);
                })
            break;
        }
        let [command, ...arg] = line.split("|");
        commands[command](...arg);
    }
 
}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
])


/*function solve(input) {

    let n = +input.shift();
    let piecesArr = input.splice(0, n);

    let pieces = {};
    piecesArr.forEach(el => {
        let [name, composer, key] = el.split('|');
        pieces[name] = {
            composer,
            key
        };
    });

    for (const line of input) {
        //Sort
        if (line === 'Stop') {
            Object.keys(pieces).sort((a, b) => a.localeCompare(b) || pieces[a].composer.localeCompare(pieces[b].composer))
                .forEach(p => {
                    console.log(`${p} -> Composer: ${pieces[p].composer}, Key: ${pieces[p].key}`);
                })
        }


        let [command, piece, x, y] = line.split("|");

        if (command == "Add") {
            if (pieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pieces[piece] = {
                    composer: x,
                    key: y,

                };
                console.log(`${piece} by ${x} in ${y} added to the collection!`);

            }
        } else if (command == "Remove") {
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == "ChangeKey") {
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece].key = x;
                console.log(`Changed the key of ${piece} to ${x}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }



}*/
function data(...input) {

    let number= +input[0];
    //let number = +input.shift();
debugger;
    for (let i = 1; i <= input.length; i++) {
        let command = input[i];
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;

            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;

            case 'spice':
                number++;
                console.log(number);
                break;

            case 'bake':
                number *= 3;
                console.log(number);
                break;

            case 'fillet':
                number *=0.8;
                console.log(number);
                break;
        }
    }

}

data('9', 'dice', 'spice', 'chop', 'bake', 'fillet')


/*or


function foo(...args) {
    let n = Number(args.shift())
    const actions = {
        chop: x => n = x / 2,
        dice: x => n = Math.sqrt(x),
        spice: x => n = x + 1,
        bake: x => n = x * 3,
        fillet: x => n = x - x * 0.2,
    }

    args.forEach(x => console.log(actions[x](n)))
}*/
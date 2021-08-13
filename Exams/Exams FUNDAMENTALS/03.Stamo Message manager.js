function solve(input) {
    const limit = +input.shift();
    let data = {}; // za da mojem da iztriem obekta, kato pak dadem data= {};

    for (const el of input) {
        let cmd = el.split('=');
        switch (cmd[0]) {
            case 'Add':
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = {
                        sent: Number(cmd[2]),
                        received: Number(cmd[3]),
                    };
                }
                break;
            case 'Message':
                if (data[cmd[1]] && data[cmd[2]]) {
                    data[cmd[1]].sent++;
                    data[cmd[2]].received++;


                    if ((+data[cmd[1]].sent + +data[cmd[1]].received) == limit) {
                        delete data[cmd[1]];
                        console.log(cmd[1]);
                    }

                    if ((+data[cmd[2]].sent + +data[cmd[2]].received) == limit) {
                        delete data(cmd[2]);
                    }
                }
                break;
            case 'Empty':
                if (cmd[1] === 'All') {
                    data = {};

                } else if (data[cmd[1]]) {
                    delete data[cmd[1]];
                }
                break;

        }

        if (cmd[0] === "Statistics") {
            break;
        }
    }

    let arr = Object.entries(data);
    let comparator = (a, b) => b[1].received - a[1].received || a[0].localeCompare(b[0]);
    arr = arr.sort(comparator);
    console.log(arr.length);
    arr.forEach(el => {
        console.log(el[0]);
        let sum = (el[1].sent + el[1].received);
        console.log(sum);
    });
}
solve(['10', 'Add=Mark=5=4', 'Add=Clark=3=5', 'Add=Berg=9=0', 'Add=Kevin=0=0', 'Message=Berg=Kevin', 'Statistics']);

//"b[1].received - a[1].received" ako imame 0 => 0 e falsy, taka `e minawa na sledwashoto.
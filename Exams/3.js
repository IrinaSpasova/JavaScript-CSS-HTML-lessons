function solve(input) {

    let data = {};
    let counter = 0;

    for (const el of input) {
        let cmd = el.split(': ');

        if (cmd === 'Log out') {
            break;
        }
        switch (cmd[0]) {
            case 'New follower':
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = {
                        like: 0,
                        comment: 0,
                    };
                    counter++;
                }
                break;
            case 'Like':
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = {
                        like: Number(cmd[2]),
                        comment: 0,
                    }
                    counter++;
                } else {
                    data[cmd[1]].like += Number(cmd[2]);
                }
                break;

            case 'Comment':
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = {
                        like: 0,
                        comment: 1,
                    };
                    counter++;
                } else {
                    data[cmd[1]].comment++;
                }
                break;


            case 'Blocked':
                if (!data.hasOwnProperty(cmd[1])) {
                    console.log(`${cmd[1]} doesn't exist.`);

                } else {
                    delete data[cmd[1]];
                    counter--;
                }
                break;
        }

    }

    console.log(`${counter} followers`);

    let arr = Object.entries(data);
    let comparator = (a, b) => (b[1].like + b[1].comment) - (a[1].like + a[1].comment) || a[0].localeCompare(b[0]);
    arr = arr.sort(comparator);
 
    arr.forEach(el => {
        let user = el[0];
        let sum = (el[1].like + el[1].comment);
        console.log(`${user}: ${sum}`);
    });

}

solve([
    'Blocked: Amy',
    'Comment: Amy',
    'New follower: Amy',
    'Like: Tom: 5',
    'Like: Ellie: 5',
    'Log out'
]);
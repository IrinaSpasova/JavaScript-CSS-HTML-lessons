function solve(input) {

    let str = input.shift();
    let cmd = input.shift().split(' ');

    while (cmd[0] != "Done") {
        switch (cmd[0]) {
            case 'Change':
                let rgx = new RegExp(cmd[1], 'g');
                str = str.replace(rgx, cmd[2]);
                console.log(str);
                break;

            case 'Includes':
                console.log(str.includes(cmd[1]) ? 'True' : 'False');
                break;

            case 'End':
                console.log(str.endsWith(cmd[1]) ? 'True' : 'False');
                break;

            case 'Uppercase':
                str = str.toUpperCase();
                console.log(str);
                break;

            case 'FindIndex':
               
                let index = str.indexOf(cmd[1])
                console.log(index);
                break;
                
            case 'Cut':
              
               let a = +cmd[1];
               let b= +cmd[2];
              let newStr = str.substring(a,b+a);
                console.log(newStr);
                break;

        }
        cmd = input.shift().split(' ');

    }


}
solve([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
])

console.log('---');

solve([
     '*S0ftUni is the B3St Plac3**',
     'Change 2 o',
     'Includes best',
     'End is',
     'Uppercase',
     'FindIndex P',
     'Cut 3 7',
     'Done'
   ]);
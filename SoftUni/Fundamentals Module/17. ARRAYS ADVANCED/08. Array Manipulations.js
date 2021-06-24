function solve(commands) {

    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                add(firstNum);
                break;
            case "Remove":
                remove(firstNum);
                break;
            case "RemoveAt":
                removeAt(firstNum);
                break;
            case "Insert":
                insert(firstNum,secondNum);
                break;
        }
    }

    function add(element){
        arr.push(element);
    }

    function remove(number){
        arr= arr.filter( element =>element !== number)
    }

    function removeAt(index){
        arr.splice(index,1);
    }

    function insert( num, index){
        arr.splice(index, 0, num);
    }

    console.log(arr.join(` `));
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);



/*Note: Removing elements with splice() receives two parameters:
•	Start Index
•	Count of elements you want to remove
Note: Inserting elements with splice() receives three parameters:
•	Start Index
•	Count of elements to remove – if none enter 0
•	Elements to insert at that position
*/
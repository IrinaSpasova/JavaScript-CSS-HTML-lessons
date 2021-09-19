function data(input){

    input = input.sort(compareNumbers);

    let cut = input.length/2;
    if(cut%1 != cut){
        cut = Math.ceil(cut);
    }

    let result = input.slice(-cut);

    console.log(result);

    function compareNumbers(a, b) {
        return a - b;
      }

}
data([4, 7, 2, 5, 9, 987, 586])

/*C:\Windows\TEMP\ExecutionStrategies\z2a4lgo5.wm3\tmpE20.tmp:98
let adapterFunction = (i, c) => c(i.map(Number)).join('\n')
                                                ^

TypeError: Cannot read property 'join' of undefined*/

function foo(arr) {
    return arr.sort((x, y) => x - y).slice(-Math.ceil(arr.length / 2))
}

console.log( input.sort((a,b)=> a-b).slice(-Math.ceil(input.length/2)));
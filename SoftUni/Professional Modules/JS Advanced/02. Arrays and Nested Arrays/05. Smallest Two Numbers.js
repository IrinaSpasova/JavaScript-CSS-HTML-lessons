function data(input){

    let first = 0;
    let second = 0;
    input=input.map(Number);

    for(let el of input){
        if(el>first){
            second=first;
            first = el;
            
        }
    }

    console.log(first);
    console.log(second);

}


data([30, 15, 50, 5]);


function data(arr) {
    return arr
        .sort((x, y) => x - y)
        .slice(0, 2)
        .join(" ")
}
data([30, 15, 50, 5]);
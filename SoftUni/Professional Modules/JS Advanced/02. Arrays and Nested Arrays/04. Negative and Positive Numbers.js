function data(input){
    let result =[];

    for( let i = 0; i< input.length; i++ ){
        if(input[i]<0){
            result.unshift(input[i]);
        }else{
            result.push(input[i]);
        }
    }

    for(let el of result){
        console.log(el);
    }
}
data([7, -2, 8, 9]);

//or

function foo(arr) {
    return arr.reduce((a, v) => {
        v < 0 ? a.unshift(v) : a.push(v)
        return a
    }, [])
}
function fibonacci(n, k) {
    //create variable to hold result, starting with 1;
    let result = [1];

    //repeat n times;
    for (let i = 0; i < n-1; i++) {
        //calculate next element;
        //slice from result k elements from the end;
        // sum sliced elements;
        let elements = result. slice(-k);
        let current = 0;
        for (let num of elements){
            current+=num;
        }
        result.push(current);
    }
    //calculate next element;
    //slice from result k elements from the end;
    // sum sliced elements;
    //store element;

    //print result;
console.log(result.join(` `));

}
fibonacci(6, 3);
fibonacci(8, 2);
fibonacci(9, 5);

/*
function fibonacci(n, k) {
    
    let result = [1];

    for (let i = 1; i < n; i++) {
 
        let current = 0;
        for (let num of result. slice(-k)){
            current+=num;
        }
        result.push(current);
    }
    

    //print result;
console.log(result.join(` `));

}*/
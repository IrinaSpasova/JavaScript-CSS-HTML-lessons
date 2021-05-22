function data(input) {

    
    for (let i = 1; i <= input; i++) {
        let result = ""
        for (let j = 1; j <= i; j++) {
            result += i + " ";
        }
        console.log(result);
    }


}
data(5);
data(10);
data(15);
data(20);
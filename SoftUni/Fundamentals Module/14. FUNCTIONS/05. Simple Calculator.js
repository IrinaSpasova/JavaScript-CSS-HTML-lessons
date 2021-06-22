function calc(a, b, operator) {

    switch (operator) {
        case `multiply`:
            console.log(a * b);
            break;
        case `divide`:
            console.log(a / b);
            break;
        case `add`:
            console.log(a + b);
            break;
        case `subtract`:
            console.log(a - b);
            break;
    }

}

calc(5,
    5,
    `multiply`)
/* 02. variant
    
    function calc(a, b, operator) {
let result =0;
    switch (operator) {
        case `multiply`:
           result =(a * b);
            break;
        case `divide`:
            result = (a / b);
            break;
        case `add`:
            result = (a + b);
            break;
        case `subtract`:
            result = (a - b);
            break;
    }
console.log(result);
}
    
    03 variant

associate massive:

    function calc(a, b, operator) {

        let operators {
`multiply`: (a,b) =>a * b,
`divide`:(a,b) =>a / b,
`add`:(a,b) =>a + b,
`subtract`:(a,b) =>a - b

        };

let result =operators[operator](a,b);

console.log(result);
}

04. variant
    let calc = (a, b, operator) =>console.log(( {
`multiply`: (a,b) =>a * b,
`divide`:(a,b) =>a / b,
`add`:(a,b) =>a + b,
`subtract`:(a,b) =>a - b
        })[operator](a.b));




*/
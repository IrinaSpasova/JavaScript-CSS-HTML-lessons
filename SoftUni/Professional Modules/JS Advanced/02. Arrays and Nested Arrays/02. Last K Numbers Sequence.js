function foo(arg) {
    const arr = [1]
    let counter = +arg[0];
    let numbers = +arg[1];
    
    for (let i = 1; i < counter; i++) {
        arr.push(arr.slice(-numbers).reduce((a, v) => a + v, 0));
    }
    console.log(arr);
}

(foo([6, 3]));

// Джъдж казва това:
//let adapterFunction = ([n, k], code) => code(Number(n), Number(k)).join('\n')

//TypeError: Cannot read property 'join' of undefined

//проблемът е, че аз такъв ред от код нямам...

//това го приема:

function foo(n, k) {
    const arr = [1];
    for (let i = 1; i < n; i++) {
        arr.push(arr.slice(-k).reduce((a, v) => a + v, 0))
    }
    return arr;
}
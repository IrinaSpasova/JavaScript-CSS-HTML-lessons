function foo(arr) {
    return arr.reduce((a, v) => (a = Math.max(...v) > a ? Math.max(...v) : a), -Infinity)
}

console.log(foo([[20, 50, 10],
    [8, 33, 145]]
   ));
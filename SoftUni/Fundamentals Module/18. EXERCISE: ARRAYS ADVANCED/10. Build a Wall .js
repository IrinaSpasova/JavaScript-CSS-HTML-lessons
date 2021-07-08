function solve(arr) {
    let parsedArr = arr.map(Number);
    let dailyConcrete = [];
    let totalConcrete = 0;
    let costs = 0;
    let crews = parsedArr.filter(len => len < 30).length;
    while (crews !== 0) {
        let concreteByAllCrews = 0;
        for (let i = 0; i < parsedArr.length; i++){
            if (parsedArr[i] !== 30) {
                parsedArr[i]++;
                concreteByAllCrews += 195;
                if (parsedArr[i] == 30) {
                    crews--;
                }
            }
        }
        totalConcrete += concreteByAllCrews;
        dailyConcrete.push(concreteByAllCrews);
    }
    costs = totalConcrete * 1900;
    console.log(dailyConcrete.join(", "));
    console.log(`${costs} pesos`);
}


/*function foo(arr) {
    let days = []
    let index = 0
    arr = arr.map(x => Number(x))

    while (arr.some(x => x !== 30)) {
        arr = arr.map(x => {
            if (x < 30) {
                x += 1
                days[index] = (days[index] || 0) + 195
            }
            return x
        })
        index += 1
    }

    console.log(`${days.join(", ")}
${days.reduce((a, v) => a + v) * 1900} pesos`)
}*/
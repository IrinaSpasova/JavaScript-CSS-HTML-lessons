function data(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    /*LOGIC*/

    let workPipe1 = p1 * h;
    let workPipe2 = p2 * h;
    let workFromPipesDone = workPipe2 + workPipe1;
    let p1WorkDone = (workPipe1 * 100 / workFromPipesDone);
    let p2WorkDone = (workPipe2 * 100 / workFromPipesDone);
    let volume = (workFromPipesDone * 100 / v);
    if (v > workFromPipesDone) {
        console.log(`The pool is ${volume}% full. Pipe 1: ${p1WorkDone.toFixed(2)}%. Pipe 2: ${p2WorkDone.toFixed(2)}%.`);
    } else if (v < workFromPipesDone) {
        console.log(`For ${h} hours the pool overflows with ${workFromPipesDone - v} liters.`);
    }




}
data(["100",
    "100",
    "100",
    "2.5"
])
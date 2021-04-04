function data(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let counter = 3;
    let volume = 0
    while (volume <= (width * length * hight)) {
        
        if (input[counter] == "Done" && (volume < (width * length * hight))) {
            console.log(`${((width * length * hight)-volume)} Cubic meters left.`);
            return;
        }
    
        volume += Number(input[counter]);
        counter++;
    }
    if (volume > (width * length * hight)) {
        console.log(`No more free space! You need ${(volume - (width * length * hight))} Cubic meters more.`)
        return;
    }
}
data(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])


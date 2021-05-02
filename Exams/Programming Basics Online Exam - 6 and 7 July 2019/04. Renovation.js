function data(input) {
    let h = Number(input[0]);
    let w = Number(input[1]);
    let cleanArea = Number(input[2]) / 100;

    let areaForPainting =(h * w*4) - ((h * w*4) * cleanArea);
    let counter = 3;
    while (true) {
        
        let paint = Number(input[counter]);
        areaForPainting -= paint;
        areaForPainting = Math.ceil(areaForPainting);
      

        if (areaForPainting<0){
            console.log(`All walls are painted and you have ${Math.abs(areaForPainting)} l paint left!`);
            return;
        }
        if (areaForPainting===0){
            console.log(`All walls are painted! Great job, Pesho!`)
            return;
        }

        counter++;
        if (input[counter] === "Tired!") {
            console.log(`${areaForPainting} quadratic m left.`);
            return;
        }
    }
}
data(["2",
"3",
"25",
"6",
"7",
"8"])

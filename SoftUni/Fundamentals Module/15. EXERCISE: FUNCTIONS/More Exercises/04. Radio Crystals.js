// function crystal(finishingValue, startingValue){

//     let initialValue=cut (finishingValue, startingValue);
//     console.log(initialValue);

// function cut (finishingValue, startingValue){
//     let counter = 0;
//     let result = 0;
//     while (Number(finishingValue-1)<=result){
//         result+=startingValue/4;
//         counter++;
//     }
//     console.log(`Cut x${counter}\nTransporting and washing`);
//     //•	Transporting and washing 
//     result= Math.round(result);
//     return result;
// }

// function lap (finishingValue, startingValue){
//     let counter = 0;
//     let result = 0;
//     while (finishingValue-1<=result){
//         result+=startingValue* 0.8;
//         counter++;
//     }
//     console.log(`Lap x${counter}\n Transporting and washing`);
//     //•	Transporting and washing 
//     result= Math.round(result);
//     return result;
// }


// }
//crystal([1375, 50000]);



function shape(arr) {
    let targetSize = arr[0];
    let operation = 'Cut';

    for(let i = 1; i < arr.length; i++) {
        let microns = arr[i];
        console.log('Processing chunk ' + microns + ' microns');

        microns = execOperation(targetSize, microns, 'Cut', cut);
        microns = execOperation(targetSize, microns, 'Lap', lap);
        microns = execOperation(targetSize, microns, 'Grind', grind);
        microns = execOperation(targetSize, microns, 'Etch', etch);

        if (microns + 1 === targetSize) {
            microns = xRay(microns);
            console.log('X-ray x1');
        }

        console.log('Finished crystal ' + microns + ' microns');
    }

    function cut(microns) {
        return microns / 4;
    }
    
    function lap(microns) {
        return microns -= 0.2 * microns;
    }
    
    function grind(microns) {
        return microns -= 20;
    }
    
    function etch(microns) {
        return microns -= 2;
    }

    function xRay(microns) {
        return ++microns;
    }

    function transportAndWash(microns) {
        console.log('Transporting and washing');
        return Math.floor(microns);
    }

    function execOperation(targetSize, microns, operation , op) {
        let times = 0;
        let size = op(microns);
        while(size >= targetSize || Math.floor(targetSize - size) === 1) {
            microns = size;
            size = op(size);
            times++;
        }

        if (times > 0) {
            console.log(`${operation} x${times}`);
            microns = transportAndWash(microns);
        }

        return microns;
    }
}
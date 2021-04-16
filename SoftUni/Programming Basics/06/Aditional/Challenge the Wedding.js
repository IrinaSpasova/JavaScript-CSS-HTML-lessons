function data(input) {

    let males = Number(input[0]);
    let females = Number(input[1]);
    let tables = Number(input[2]);


    /* LOGIC*/

    let malesCounter = 0;
    let femalesCounter = 0;
    let result = "";

    for (let i = males; i > 0; i--) {
        if (tables === 0) {
            break;
        }
        malesCounter++;
        femalesCounter=0;
        for (let j = females; j > 0; j--) {
            tables--;
            femalesCounter++;
            result += `(${malesCounter} <-> ${femalesCounter}) `
            if (tables === 0) {
                break;

            }
        }


    }


    console.log(result);


}

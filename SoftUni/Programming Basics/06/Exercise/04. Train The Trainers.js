function data (input){
let n = Number(input[0]);

/*LOGIC*/

let counter = 1;
let finalAssessment = 0;
let gradesCounter =0;

while(input[counter] != "Finish"){
    let nameOfPresentation = input[counter];
    let assessmentPerPresentation=0;
    let sumAssessment = 0;
    for (let i = 1; i<=n; i++){
        assessmentPerPresentation = Number(input[counter+i]);
        sumAssessment+= assessmentPerPresentation;
        finalAssessment+=assessmentPerPresentation;
        gradesCounter++;
    }
    
    console.log(`${nameOfPresentation} - ${(sumAssessment/n).toFixed(2)}.`);
    counter+=n+1;
    
}

console.log(`Student's final assessment is ${(finalAssessment / gradesCounter).toFixed(2)}.`);
}
data(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"])


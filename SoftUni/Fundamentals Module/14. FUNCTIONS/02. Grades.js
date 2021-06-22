function formatGrades(grade) {
    let result = ``;
    if (grade >= 3 && grade < 3.50){
        result = `Poor`;
    }else if ( grade < 3){
        result = `Fail`;
        console.log(`Fail (2)`);
        return;
    }else if (grade >= 3.5 && grade < 4.50){
        result = `Good`;
    }else if (grade >= 4.5 && grade < 5.50){
        result = `Very good`;
    }else{
        result=`Excellent`;
    }

    console.log(`${result} (${grade.toFixed(2)})`);
}
formatGrades(2.33)
function data(input) {
    let students = Number(input[0]);
    let grades = Number(input[1]);


    /*LOGIC*/
    let sumOfGrades = 0;
    let excellentGrade = 0;
    let goodGrade = 0;
    let middleGrade = 0;
    let failGrade = 0;



    for (let i = 1; i <= students; i++) {
        grades = Number(input[i])
        if (grades >= 5.00) {
            excellentGrade++;
            sumOfGrades += grades;
        } else if (grades >= 4.00 && grades <= 4.99) {
            goodGrade++;
            sumOfGrades += grades;
        } else if (grades >= 3.00 && grades <= 3.99) {
            middleGrade++;
            sumOfGrades += grades;
        } else {
            failGrade++;
            sumOfGrades += grades;
        }
    }
    console.log(`Top students: ${(excellentGrade/students*100).toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${(goodGrade/students*100).toFixed(2)}%`)
    console.log(`Between 3.00 and 3.99: ${(middleGrade/students*100).toFixed(2)}%`)
    console.log(`Fail: ${(failGrade/students*100).toFixed(2)}%`)
    console.log(`Average: ${(sumOfGrades/students).toFixed(2)}`)

}
data([6,2,3,4,5,6,2.2,])
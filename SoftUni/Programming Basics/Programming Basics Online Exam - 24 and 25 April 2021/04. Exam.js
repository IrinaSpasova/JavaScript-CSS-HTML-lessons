function data(input) {

    let studentsCount = Number(input[0]);


    /*LOGIC*/
    let topStudentsCounter = 0;
    let goodStudentsCounter = 0;
    let averageStudentsCounter = 0;
    let BadStudentsCounter = 0;
    let gradesSum = 0;

    for (let i = 1; i <= studentsCount; i++) {
        let grades = Number(input[i]);
        if (grades >= 5) {
            topStudentsCounter++;
            gradesSum += grades;
        } else if (grades >= 4 && grades <= 4.99) {
            goodStudentsCounter++;
            gradesSum += grades;
        } else if (grades >= 3 && grades <= 3.99) {
            averageStudentsCounter++;
            gradesSum += grades;
        } else if (grades < 3) {
            BadStudentsCounter++;
            gradesSum += grades;
        }
    }

    let p1Percent = topStudentsCounter / studentsCount * 100;
    console.log(`Top students: ${p1Percent.toFixed(2)}%`);
    let p2Percent = goodStudentsCounter / studentsCount * 100;
    console.log(`Between 4.00 and 4.99: ${p2Percent.toFixed(2)}%`);
    let p3Percent = averageStudentsCounter / studentsCount * 100;
    console.log(`Between 3.00 and 3.99: ${p3Percent.toFixed(2)}%`);
    let p4Percent = BadStudentsCounter / studentsCount * 100;
    console.log(`Fail: ${p4Percent.toFixed(2)}%`);
    let averageScore = gradesSum/studentsCount;
    console.log(`Average: ${averageScore.toFixed(2)}`);

}
data(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])


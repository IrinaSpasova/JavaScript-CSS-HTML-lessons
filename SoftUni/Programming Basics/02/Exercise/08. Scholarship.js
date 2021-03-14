function data(input) {
    let income = Number(input[0]);
    let avergeAssessments = Number(input[1]);
    let minimalSalary = Number(input[2]);
    let scholarship = Math.floor(avergeAssessments * 25);
    let socialScolarship = Math.floor(minimalSalary * 0.35);

    /*LOGIC*/

    if (avergeAssessments <= 4.5) {
        console.log("You cannot get a scholarship!");
    } else if (minimalSalary <= income && avergeAssessments < 5.5) {
        console.log("You cannot get a scholarship!");
    }


    if (avergeAssessments > 4.5 && avergeAssessments < 5.5 && income < minimalSalary) {
        console.log(`You get a Social scholarship ${(socialScolarship)} BGN`);
    }

    if (avergeAssessments >= 5.5 && income < minimalSalary && scholarship > socialScolarship) {
        console.log(`You get a scholarship for excellent results ${(scholarship)} BGN`);
    }
    if (avergeAssessments >= 5.5 && income < minimalSalary && scholarship < socialScolarship) {
        console.log(`You get a Social scholarship ${(socialScolarship)} BGN`);
    }
    if (avergeAssessments >= 5.5 && income >= minimalSalary) {
        console.log(`You get a scholarship for excellent results ${(scholarship)} BGN`);
    }

}
data(["6880.00",
"5.80",
"6000.00"])

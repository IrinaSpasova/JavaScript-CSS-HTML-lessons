/*************************************************************************************************/
/*     Грешно решение, което Джъдж приема за вярно - не отчита възможност за равни стипендии     */
/*************************************************************************************************/
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



/******************************************************************************************/
/*             Вярно решение, което Джъдж приема за грешно                                */
/******************************************************************************************/

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
    }else if (avergeAssessments >= 5.5 && income < minimalSalary && socialScolarship <= scholarship){
        console.log(`You get a scholarship for excellent results ${(scholarship)} BGN`);
    }
    if (avergeAssessments >= 5.5 && income >= minimalSalary) {
        console.log(`You get a scholarship for excellent results ${(scholarship)} BGN`);
    }

}



Проверка : data(["300",
    "5.60",
    "400"
])  (това са === стипендии)



/******************************************************************************************/
/*            Елегантно решение на колежка                                                */
/******************************************************************************************/

function scholarship(input){
    let income = Number(input[0]);
    let averageGrade = Number(input[1]);
    let minWage = Number(input[2]);
    let socialScolarship = 0;
    let gradeScholarship = 0;
    if (income < minWage && averageGrade > 4.50){
    socialScolarship = Math.floor(0.35 * minWage);
    }
    if(averageGrade >= 5.5){
    gradeScholarship = Math.floor(averageGrade * 25);
    }
    if (socialScolarship > gradeScholarship){
    console.log(`You get a Social scholarship ${socialScolarship} BGN`);
    } else if (gradeScholarship >= socialScolarship && gradeScholarship != 0){
    console.log(`You get a scholarship for excellent results ${gradeScholarship} BGN`);
    } else{
    console.log(`You cannot get a scholarship!`);
    }
    }

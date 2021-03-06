function projectsCreation(input){
    let name = input[0];
    let project = Number(input[1]);
    let solution = project*3;
    console.log(`•	"The architect ${name} will need ${solution} hours to complete ${project} project/s."`);
}
projectsCreation(["George","9"]);





/*•	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."*/
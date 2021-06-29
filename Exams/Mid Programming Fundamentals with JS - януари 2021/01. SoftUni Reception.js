function solve(input) {
    input = input.map(Number)
    let firstEmployeeEfficiency = input.shift();
    let secondEmployeeEfficiency = input.shift();
    let thirdEmployeeEfficiency = input.shift();
    let totalStudents = input.shift();

    // ILI    
    //let firstEmployeeEfficiency= Number(input[0]);
    //let secondEmployeeEfficiency= Number(input[1]);
    //let thirdEmployeeEfficiency= Number(input[2]);
    //let totalStudents = Number(input[3]);

    let studentPerHour = firstEmployeeEfficiency + secondEmployeeEfficiency + thirdEmployeeEfficiency;
    //let answeredStudent = 0;
    let hours = 0;
    while( totalStudents>0) {
        totalStudents -= studentPerHour;
        
        hours++;
        if (hours%4 === 0){
            hours++;
        }
    }

    //console.log(answeredStudent);
    console.log(`Time needed: ${hours}h.`);

}

solve(['3', '2', '5', '40'])
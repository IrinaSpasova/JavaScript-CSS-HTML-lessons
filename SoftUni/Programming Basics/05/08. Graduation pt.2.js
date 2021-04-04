function data(input){
let name = input[0];
let counter = 1;
let lowGradeCounter=0;
let averageGrade = 0;



while(counter<=12){
    if(Number(input[counter])>=4){
        averageGrade+=Number(input[counter]); 
        counter++;
    }else{
        lowGradeCounter++;
        if(lowGradeCounter===2){
            console.log(`${name} has been excluded at ${counter} grade`);
            return;
        }
    }
    
}

    console.log(`${name} graduated. Average grade: ${(averageGrade/12).toFixed(2)}`)
}

data(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


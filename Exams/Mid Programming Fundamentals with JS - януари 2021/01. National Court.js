function solve(input) {
    //parse input
    //take first three elements and calculate employee efficiency
    // last element is client count

    let e1 = Number(input[0]);
    let e2 = Number(input[1]);
    let e3 = Number(input[2]);

    let efficiency = e1 + e2 + e3;
    let people = Number(input[3]);
    let hour = 0;

    //repeat until there are no  more clients

    // if current hour is 4th- do nothing

    while (people > 0) {
        //record current hour
        hour++;

        if (hour % 4 != 0) {
            //subtract from the remaining client count employee efficiency
            people -= efficiency;
        }

    }

    console.log(`Time needed: ${hour}h.`);

}
solve(["5", "6", "4", "20"])
solve(["1", "2", "3", "45"])
solve(["5", "6", "4", "0"])



/*function solve(input){
let [e1,e2,e3, people] = input.map(Number);

if (people === 0 ){
  console.log(`Time needed: 0h.`);  
  return;
}
let efficiency = e1+e2+e3;
//calculate needed time
let required = Math.ceil(people/efficiency);
//calculate break time
let pause = Math.floor(required/3);
//sum result
if (required%3 === 0){
    pause-=1;
}



console.log(`Time needed: ${required+pause}h.`);

} */
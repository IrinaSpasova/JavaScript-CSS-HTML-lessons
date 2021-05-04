function data(input){
let name = input[0];
let seasons = Number(input[1]);
let episodes = Number(input[2]);
let minutes = Number(input[3]);

let sum = (seasons*episodes*minutes)+((seasons*episodes*minutes)*0.2)+10*seasons;
    console.log(`Total time needed to watch the ${name} series is ${Math.floor(sum)} minutes.`);
}
data(["Game of Thrones",
"7",
"10",
"50"])

/*let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];


Перфектното заместване на switch! */

function weekday(num) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  if (num > 7 || num < 1) {
    console.log("Invalid day!");
    return;
  }
  let index = num - 1;
  /*това се разхожда по масива! За това е -1)*/

  console.log(days[index]);
}


/*Без return:

function weekday(num){
let days=[
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
if(num>7 || num<1){
    console.log("Invalid day!");  
}else{
let index = num-1;
console.log(days[index]);
}

}*/

weekday([5]);
weekday([7]);
weekday([3]);
weekday([12]);
function data(input){
let recordSec = Number(input[0]);
let meters =Number(input[1]);
let secondsPerMeter = Number(input[2]);

let additionalTime = Math.floor(meters/50)*30;
let time = (meters*secondsPerMeter)+additionalTime;

if(time<recordSec){
    console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`);
}else{
    console.log(`No! He was ${(time-recordSec).toFixed(2)} seconds slower.`);
}

}
data
(["5554.36",
"1340",
"3.23"])


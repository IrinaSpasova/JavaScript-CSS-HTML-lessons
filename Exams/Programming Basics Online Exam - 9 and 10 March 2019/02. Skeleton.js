function data(input){
let seconds = (Number(input[0])*60)+Number(input[1]);
let delay = (Number(input[2])/120)*2.5;
let time = ((Number(input[2])/100)*Number(input[3]))-delay;
if ( time<=seconds){
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${time.toFixed(3)}.`)
}else{
    console.log(`No, Marin failed! He was ${(time-seconds).toFixed(3)} second slower.`)
}


}
data(["1",
"20",
"1546",
"12"])

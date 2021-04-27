function data(input){

    let bitcoin = Number(input[0])*1168;
    let yuan = Number(input[1])*0.15;
    let tax = Number(input[2])/100;

    let sum =((bitcoin+(yuan*1.76))/1.95); 
    let comision = (sum*tax);

    console.log((sum-comision).toFixed(2));
    
}
data(["1","5","5"])
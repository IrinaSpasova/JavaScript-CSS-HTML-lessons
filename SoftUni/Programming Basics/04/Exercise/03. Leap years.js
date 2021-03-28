function data(input){
let leap = Number(input[0]);
let normal = Number(input[1]);

/*LOGIC*/

for(i=leap; i<=normal; i+=4)
{
    console.log(i);
}



}
data(["2000","2011"])

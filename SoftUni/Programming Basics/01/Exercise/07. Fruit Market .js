function data(input) {

    let strawberryPrice = Number(input[0]);
    let bananaCount = Number(input[1]);
    let orangeCount = Number(input[2]);
    let raspberrieCount = Number(input[3]);
    let strawberryCount = Number(input[4])

    /*LOGIC*/

    let raspberriePrice = strawberryPrice / 2;
    let orangePrice = raspberriePrice * 0.60;
    let bananaPrice = raspberriePrice * 0.20;
    let strawberryFinal = strawberryPrice * strawberryCount;
    let rasberryFinal = raspberriePrice * raspberrieCount;
    let orangeFinal = orangePrice * orangeCount;
    let bananaFinal = bananaPrice * bananaCount;
    let finalPriceForAll = strawberryFinal + rasberryFinal + orangeFinal + bananaFinal;

    console.log(finalPriceForAll);

}
data(["63.5",
    "3.57",
    "6.35",
    "8.15",
    "2.5"
]);


/*Alexander Patalenski

Пиши *това* в Judge и ще получиш 100/100 😉
function test(input){console.log( Number(input[0]) * ( (Number(input[1])*0.2+Number(input[2])*0.6+Number(input[3]))/2+Number(input[4]) ) )}*/

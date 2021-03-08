function data(input) {
    /*Георги ще има гости вечерта и решава да ги нагости с паламуд, сафрид и миди. Затова отива на рибната борса, за да си купи по няколко килограма. Oт конзолата се въвеждат цените в лева на скумрията и цацата. Също количеството на паламуд, сафрид и миди в килограми. Колко пари ще са му необходими, за да плати сметката си, ако цените на борсата са:
    •	Паламуд – 60% по-скъп от скумрията
    •	Сафрид – 80% по-скъп от цацата
    •	Миди – 7.50 лв. за килограм
    Вход
    От конзолата се четат 5 числа:
    •	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
    •	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
    •	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
    •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
    •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]
              *** 
              Math.round(num * 100) / 100 - реже без закръгляване
              Or to be more specific and to ensure things like 1.005 round correctly, use Number.EPSILON : Math.round((num + Number.EPSILON) * 100) / 100
              *** 
              Плаваща запетая console.log(new Intl.NumberFormat().format(number)); ***
    */
    /*
     let mackerelPricePerKilogram = Number(input[0]);
     let spratPricePerKilogram = Number(input[1]);
     let bonitoKilograms = Number(input[2]);
     let horseMackerelKilograms = Number(input[3]);
     let musselsKilograms = Number(input[4]);

     /*LOGIC*/

    /* let bonitoPrice = mackerelPricePerKilogram + (mackerelPricePerKilogram * 0.60);
     let bonitoPriceRound = bonitoPrice.toFixed(2);
     let horseMackerelPrice = spratPricePerKilogram + (spratPricePerKilogram * 0.80);
     let horseMaskerelPriceRound = toFixed(horseMackerelPrice);
     let mussels = musselsKilograms * 7.5;
     let musselsRound = toFixed(mussels);
     let bonito = (bonitoPriceRound * bonitoKilograms);
     let bonitoRound = toFixed(bonito);
     let horseMaskerel = (horseMackerelKilograms * horseMaskerelPriceRound);
     let horseMaskerelRound = horseMaskerel.toFixed(2);
     let totalPrice = musselsRound + bonitoRound + horseMaskerelRound;

     console.log(bonitoPriceRound);*/

    /* 
        let bonitoPrice = mackerelPricePerKilogram + (mackerelPricePerKilogram * 0.60);
        let bonito = bonitoPrice * bonitoKilograms;

        let horseMackerelPrice = spratPricePerKilogram + (spratPricePerKilogram * 0.80);
        let horseMackerelPriceRound = horseMackerelPrice.toFixed(2);
        let horseMaskerel = horseMackerelKilograms * horseMackerelPriceRound;

        let mussels = musselsKilograms * 7.5;
       
       
        let totalPrice = mussels + bonito + horseMaskerel;
       
           console.log(totalPrice.toFixed(2));
*/



    let mackerelPricePerKilogram = Number(input[0]);
    let spratPricePerKilogram = Number(input[1]);
    let bonitoKilograms = Number(input[2]);
    let horseMackerelKilograms = Number(input[3]);
    let musselsKilograms = Number(input[4]);



    let bonitoPrice = mackerelPricePerKilogram + (mackerelPricePerKilogram * 0.60);
    let bonito = bonitoPrice * bonitoKilograms;
    let horseMackerelPrice = spratPricePerKilogram + (spratPricePerKilogram * 0.80);
    let horseMaskerel = horseMackerelKilograms * horseMackerelPrice;
    let mussels = musselsKilograms * 7.5;
    let totalPrice = mussels + bonito + horseMaskerel;

    console.log(totalPrice.toFixed(2));
}
data(["6.90",
    "4.20",
    "1.5",
    "2.5",
    "1"
])
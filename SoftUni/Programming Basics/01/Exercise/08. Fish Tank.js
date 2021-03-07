function data(input) {

    let dept = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3]);


    /*LOGIC Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/. */

    let volume = dept * width * hight;
    let waterInTheTank = volume * 0.001;
    let percentOtherInTheTank = percent * 0.01;
    let finalVolume = waterInTheTank * (1 - percentOtherInTheTank);
    /*защото ни трябва само процента, който е чиста вода, не вода с пясък и т.н.*/

        console.log(finalVolume);
    }
    data(["85",
        "75",
        "47",
        "17"
    ]);
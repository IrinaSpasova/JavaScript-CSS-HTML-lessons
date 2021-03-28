function data(input) {
    let age = Number(input[0]);
    let washingMachine = Number(input[1]);
    let priceToys = Number(input[2]);

    /*LOGIC*/
    let sumMoney = 0;
    let sumToys = 0;
    let money = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 1) {
            sumToys++;
        } else {
            sumMoney += money;
            money += 10; 
            /* това го правим, за да може парите за следващият рожден ден да се увеличат!*/
            sumMoney--; /*брат и си взима по един лев*/
        }
    }

    sumMoney += sumToys*priceToys;

    if(sumMoney>=washingMachine){
        console.log(`Yes!${(sumMoney-washingMachine).toFixed(2)}`)
    }else{
        console.log(`No!${Math.abs(sumMoney-washingMachine).toFixed(2)}`)
    }

}
data(["10", "170", "6"]);

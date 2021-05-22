
function Pyramid(base, increment) {
 
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
    let currentbase=base;
 
    while (currentbase>2) {
     let marbel=currentbase*4-4;
     let stone=currentbase*currentbase-marbel;
        totalstone+=stone;
 
        row++;
        if(row%5===0){
            totallapis+=marbel;
        }else{
            totalmarble+=marbel;
        }
        currentbase-=2;
    }
    row++;
    let gold=currentbase*currentbase;
 
    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row*increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
 
}




/*
Това не минава в Джъдж

function data(input) {
    let base = Number(input[0]);
    let increment = Number(input[1]);


    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;


    while (true) {

        stone += (base - 2) * (base - 2);
        marble += base * 2 + ((base - 2) * 2);
        step++;
        if (step % 5 === 0) {
            marble -= base * 2 + ((base - 2) * 2);
            lapisLazuli += base * 2 + ((base - 2) * 2);
        }
        base -= 2;
        if (base === 1 || base === 2) {
            gold = base*base;
            step++;
            break;
        }
    }
    let height = Math.floor(step * increment);

    console.log(`Stone required: ` + Math.ceil(stone * increment));
    console.log(`Marble required: ` + Math.ceil(marble * increment));
    console.log(`Lapis lazuli required: ` + Math.ceil(lapisLazuli * increment));
    console.log(`Gold required: ` + Math.ceil(gold * increment));
    console.log(height);

}*/
data([11, 1])


/*Друго решение:

function solve(baseSide, blockHeight) {
    baseSide = Number(baseSide);
    blockHeight = Number(blockHeight);
    let floor = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    while (baseSide > 1) {
        let totalBlocks = (baseSide * baseSide * blockHeight);
        let innerBlocks = ((baseSide - 2) * (baseSide - 2)) * blockHeight;
        let outerBlocks = totalBlocks - innerBlocks;

        if (baseSide - 2 === 0) {
            break;
        }

        floor++;
        baseSide -= 2;

        if (floor % 5 === 0) {
            lapis += outerBlocks;
            stone += innerBlocks;
        } else {
            marble += outerBlocks;
            stone += innerBlocks;
        }

    }
    floor++;
    height = Math.floor(floor * blockHeight);
    gold += Math.ceil(baseSide * baseSide * blockHeight);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}*/
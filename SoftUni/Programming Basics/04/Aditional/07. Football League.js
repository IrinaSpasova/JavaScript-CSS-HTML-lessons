function data(input) {
    
    let capacity = Number(input[0]);
    let people = Number(input[1])

    /*LOGIC*/

    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;

    for (let i = 3; i <= people+1; i++) { /*  for (let i = 0; i <= people+1; i++)
        people+1 Това (+1) е единствения начин да излезе сметката, иначе не чете последната част от масива, защото ЦЕЛИЯ масив е с дължина 12, ние започваме да четем от третия, 12 е всъщност 11, понеже почваме от 0,1,2, и т.н. Следователно към търсените за прочитане числа добавяме 1 (в този случай) за да може да ги прочете.*/
        let sector = input[i];
        if (sector === "A") {
            countA++;
        } else if (sector === "B") {
            countB++;
        } else if (sector === "V") {
            countV++;
        } else if (sector === "G") {
            countG++;
        }

    }




/*let capacity = Number(input.shift());
    let people = Number(input.shift());
    let sector = input.shift();


     for (let i = 0; i < people; i++) {
          switch (sector) {
              case "A":
                  countA++;
                  break;
              case "B":
                  countB++;
                  break;
              case "G":
                  countG++;
                  break;
              case "V":
                  countV++;
                  break;
          }

          sector = input.shift();
      }*/


    console.log(`${((countA/people)*100).toFixed(2)}%`);
    console.log(`${((countB/people)*100).toFixed(2)}%`);
    console.log(`${((countV/people)*100).toFixed(2)}%`);
    console.log(`${((countG/people)*100).toFixed(2)}%`);
    console.log(`${((people/capacity)*100).toFixed(2)}%`);
}

data([76, 10, "A","V","V","V","G","B","A","V","B","B"]);
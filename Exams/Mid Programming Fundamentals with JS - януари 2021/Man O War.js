function solve(input) {

    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = +input.shift();

    for (const line of input) {
        if (line === "Retire") {
            break;
        }


        let tokens = line.split(" ");
        let command = tokens.shift();

        switch (command) {
            case "Fire":
                let ind = +tokens[0];
                let damage = +tokens[1];
                if (ind < 0 || ind >= warShip.length) {
                    break;
                }
                warShip[ind] -= damage;
                if (warShip[ind] <= 0) {
                    return `You won! The enemy ship has sunken.`;
                }
                break;
            case "Defend":
                let start = +tokens[0];
                let end = +tokens[1];
                let dam = +tokens[2];
                if (start < 0 || start >= pirateShip.length || end < 0 ||
                    end >= pirateShip.length) {
                    break;
                }
                for (let i = start; i <= end; i++) {
                    pirateShip[i] -= dam;
                    if (pirateShip[i] <= 0) {
                        return "You lost! The pirate ship has sunken.";
                    }
                }
                break;
            case "Repair":
                let ind2 = +tokens[0];
                let health = +tokens[1];

                if (ind2 < 0 || ind2 >= pirateShip.length) {
                    break;
                }
                let currentHealth = pirateShip[ind2] + health;
                if (currentHealth > maxHealth) {
                    currentHealth = maxHealth;
                }
                pirateShip[ind2] = currentHealth;
                break;
            case "Status":
                let count = 0;
                pirateShip.forEach(section => {
                    if (section < maxHealth * 0.2) {
                        count++;
                    }
                });
                console.log(`${count} sections need repair.`);
                break;
        }


    }

    let pirateShipSum = pirateShip.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    let warShipSum = warShip.reduce((a, b) => a + b);

    return `Pirate ship status: ${pirateShipSum}\nWarship status: ${warShipSum}`

}

console.log(solve([
    '12>13>11>20>66',
    '12>22>33>44>55>32>18',
    '70',
    'Fire 2 11',
    'Fire 8 100',
    'Defend 3 6 11',
    'Defend 0 3 5',
    'Repair 1 33',
    'Status',
    'Retire'
]));


/*function manOwar(input = []) {
 
    let pirateShip = [];
    pirateShip = input.shift().split(`>`).map(Number);
    let warShip = [];
    warShip = input.shift().split(`>`).map(Number);
    let maxHealth = Number(input.shift());
    let token = input.shift();
    let isDead = false;
   
    while (token != `Retire`) {
      if (isDead === true) {
        break;
      }
      let splittedToken = token.split(` `);
      let comand = splittedToken[0];
      let indexOne = splittedToken[1];
      let indexTwo = splittedToken[2];
      let indexThree = splittedToken[3];
   
      if (comand === `Fire`) {
        fire(indexOne, indexTwo);
      } else if (comand === `Defend`) {
        defend(indexOne, indexTwo, indexThree);
      } else if (comand === `Repair`) {
        repair(indexOne, indexTwo);
      } else if (comand === `Status`) {
        status();
      }
   
      token = input.shift();
    }
   
    if (!isDead) {
      let warShipPoint = warShip.reduce((acc, el) => acc + el, 0);
      let pirateShipPoints = pirateShip.reduce((acc, el) => acc + el, 0);
   
      console.log(`Pirate ship status: ${pirateShipPoints}`);
      console.log(`Warship status: ${warShipPoint}`);
    }
   
    function fire(index, damage) {
      index = Number(index);
      damage = Number(damage);
      if (index >= 0 && index < warShip.length) {
        warShip[index] = warShip[index] - damage;
        if (warShip[index] <= 0) {
          isDead = true;
          console.log(`You won! The enemy ship has sunken.`);
          return;
        }
      }
    }
   
    function defend(startIndex, endIndex, damage) {
      startIndex = Number(startIndex);
      endIndex = Number(endIndex);
      damage = Number(damage);
      if ((startIndex >= 0 && startIndex < pirateShip.length) && (endIndex >= startIndex && endIndex <= pirateShip.length - 1)) {
        for (let i = startIndex; i <= endIndex; i++) {
          pirateShip[i] -= damage;
          if (pirateShip[i] <= 0) {
            isDead = true;
            console.log(`You lost! The pirate ship has sunken.`);
            return;
          }
        }
      }
    }
   
    function repair(index, health) {
      index = Number(index);
      health = Number(health);
      if (index >= 0 && index < pirateShip.length) {
        if (pirateShip[index] + health < maxHealth) {
          pirateShip[index] = pirateShip[index] + health;
        } else {
          pirateShip[index] = maxHealth;
        }
   
      }
    }
   
    function status() {
      let lessThan20Perc = maxHealth * 0.2;
      let coundSections = 0;
      for (let i = 0; i < pirateShip.length; i++) {
        if (pirateShip[i] < lessThan20Perc) {
          coundSections++;
        }
      }
      console.log(`${coundSections} sections need repair.`);
   
    }
   
  }*/
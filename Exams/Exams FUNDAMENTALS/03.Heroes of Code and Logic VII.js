function solve(input) {

    let heroes = {};
    let n = +input.shift();
    input.splice(0, n)
        .forEach(line => {
            let [heroName, hp, mp] = line.split(` `);
            hp = +hp;
            mp = +mp;

            heroes[heroName] = {
                hp,
                mp,
            };

        });

    input
        .forEach(line => {
            let [command, ...tokens] = line.split(` - `);
            let output;
            if (command !== `End`) {
                if (command === `CastSpell`) {
                    output = castSpell(heroes, ...tokens);
                } else if (command === `Recharge`) {
                    output = recharge(heroes, ...tokens);
                } else if (command === `TakeDamage`) {
                    output = takeDamage(heroes, ...tokens);
                } else if (command === `Heal`) {
                    output = heal(heroes, ...tokens);
                }
                console.log(output);
            }

        })

    let sortedHeroes = Object.entries(heroes)
        .sort(compareHeroes);

    function compareHeroes(a, b) {
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;
        let byHealthDescending = bInfo.hp - aInfo.hp;
        if (byHealthDescending === 0) {
            return aName.localeCompare(bName);
        }
        return byHealthDescending;


        // ili: return bInfo.hp-aInfo.hp || aName.localeCompare(bName);
    }


    for (let [heroName, heroInfo] of sortedHeroes) {
        let {
            hp,
            mp
        } = heroInfo;

        console.log(heroName);
        console.log(`HP: ${hp}`);
        console.log(`MP: ${mp}`);
    }

    function castSpell(heroes, heroName, mpNeeded, spellName) {
        mpNeeded = +mpNeeded;
        const hero = heroes[heroName];

        if (hero.mp >= mpNeeded) {
            hero.mp -= mpNeeded;
            return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`;
        }

        return `${heroName} does not have enough MP to cast ${spellName}!`;
    }


    function takeDamage(heroes, heroName, damage, attacker) {
        damage = +damage;
        const hero = heroes[heroName];

        hero.hp -= damage;
        if (hero.hp > 0) {
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`;
        }
        delete heroes[heroName];
        return `${heroName} has been killed by ${attacker}!`;
    }

    function recharge(heroes, heroName, amount) {
        amount = +amount;
        const hero = heroes[heroName];
        let oldValue = hero.mp;
        hero.mp = Math.min(200, hero.mp + amount); //спестяваме една иф проверка така

        return `${heroName} recharged for ${hero.mp - oldValue} MP!`;
    }

    function heal(heroes, heroName, amount) {
        amount = +amount;
        const hero = heroes[heroName];
        let oldValue = hero.hp;
        hero.hp = Math.min(100, hero.hp + amount); //спестяваме една иф проверка така

        return `${heroName} healed for ${hero.hp-oldValue} HP!`;
    }

}
solve([`4`, `Adela 90 150`, `SirMullich 70 40`, `Ivor 1 111`, `Tyris 94 61`, `Heal - SirMullich - 50`, `Recharge - Adela - 100`, `CastSpell - Tyris - 1000 - Fireball`, `TakeDamage - Tyris - 99 - Fireball`,
    `TakeDamage - Ivor - 3 - Mosquito`, `End`,
])
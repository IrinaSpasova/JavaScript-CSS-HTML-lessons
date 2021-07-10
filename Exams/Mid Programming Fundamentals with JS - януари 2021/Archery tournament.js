function solve(input = []) {
    let targets = input.shift().split("|").map(Number);
    let points = 0;
    let commands;
   
    while ((commands = input.shift()) !== "Game over") {
      let tokens = commands.split("@");
      if (tokens[0] === "Shoot Left") {
        let index = +tokens[1];
        let length = +tokens[2];
        if (index >= 0 && index <= targets.length - 1) {
          let i = index - length;
   
          while (i < 0) {
            i = targets.length + i;
          }
   
          if (targets[i] >= 5) {
            targets[i] -= 5;
            points += 5;
          } else {
            points += targets[i];
            targets[i] = 0;
          }
        }
      }
   
      if (tokens[0] === "Shoot Right") {
        let index = +tokens[1];
        let length = +tokens[2];
   
        if (index >= 0 && index <= targets.length - 1) {
          let i = index + length;
   
          while (i >= targets.length - 1) {
            i = i - targets.length;
          }
   
          if (targets[i] >= 5) {
            targets[i] -= 5;
            points += 5;
          } else {
            points += targets[i];
            targets[i] = 0;
          }
        }
      }
   
      if (tokens[0] === "Reverse") {
        targets.reverse();
      }
    }
   
    console.log(targets.join(" - "));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
  }
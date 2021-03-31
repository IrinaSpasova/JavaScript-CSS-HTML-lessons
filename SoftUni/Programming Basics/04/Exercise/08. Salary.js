function data(input) {
    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    /*LOGIC*/

  

    for (let i = 0; i <= tabs; i++) {
        let site = input[i];

        switch (site) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
        }
        if (salary <= 0) {
            console.log(`You have lost your salary.`);
            return;
    }
    
    } 
    if(salary>0) {
        console.log(Math.floor(salary));
    }

/* Ne go priema:( */

}
data(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"]
)


/*

function salary (input){
    let n = Number(input.shift());
    let money = Number(input.shift());
    let tax = 0;

    for (i = 1; i <= n; i++){
        let site = input.shift();
        if (site == 'Facebook') {
            tax = 150;
            money -= tax;
        } else if(site == 'Instagram') {
            tax =100;
            money -= tax;
        } else if (site == 'Reddit') {
            tax = 50;
            money -= tax;
        }
  
        if (money <=0) {
            console.log ('You have lost your salary.');
            break;
        }
    }
    if (money > 0) {
        console.log (`${money.toFixed(0)}`);
    }
}*/
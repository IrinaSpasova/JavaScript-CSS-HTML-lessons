class ChristmasDinner {
    constructor(budget) {
        this.budget = budget,
            this.dishes = [],
            this.products = [],
            this.guests = {}

    }

    set budget(value) {

        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    get budget() {
        //need to have difference with the function name, in other case - recursion!!!
        return this._budget;
    }

    shopping([type, price]) {
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.budget -= price;
        this.products.push(type);

        return `You have successfully bought ${type}!`;
    }
    /**
     * 
     * @param {{recipeName: string, productsList: Array<string>}} recipe 
     */
    recipes({
        recipeName,
        productsList
    }) {
        //use some to find did you have all the products. If one missing it will throw false:
        if (productsList.some(p => this.products.includes(p) == false)) {
            throw new Error("We do not have this product");
        }

        this.dishes.push({
            recipeName,
            productsList
        });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (this.dishes.some( d => d.recipeName == dish) == false){
            throw new Error("We do not have this dish");
        } else if (this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];

        Object.entries(this.guests).forEach(([guestName,dish] )=>{
            result.push(`${guestName} will eat ${dish}, which consists of ${this.dishes.find(d => d.recipeName ==dish).productsList.join(', ')}`);

        });

       return result.join('\n');
    }
}

//tests:
// with insufficient budget:
//const myDinner = new ChristmasDinner(-5);
// with sufficient budget:
//const myDinner = new ChristmasDinner(50);
//console.log(myDinner.budget);


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

console.log(dinner.products);
console.log(dinner.budget);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

//to check it works:
// dinner.recipes({
//     recipeName: 'blq',
//     productsList: ['bgq', 'etg', 'yiu']
// });

console.log(dinner.dishes);
dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');
//to check it works:
//dinner.inviteGuests('pesho', 'mlq');
//dinner.inviteGuests('Ivan', 'Oshav');

console.log(dinner.guests);

 console.log(dinner.showAttendance());
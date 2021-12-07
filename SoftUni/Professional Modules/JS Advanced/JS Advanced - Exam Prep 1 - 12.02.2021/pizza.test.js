const pizzUni = require('./pizza');
const {
    expect
} = require('chai');

describe("Pizza place tests", () => {

    describe("makeAnOrder tests", () => {
        // order pizza only:
        it("Should return confirmation message when pizza is ordered", () => {
            let order = {
                orderedPizza: 'Capricciosa',
            }

            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza}`);

        });

        //order pizza and drink:
        it("Should return confirmation message when pizza and drink is ordered", () => {
            let order = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'Cola',
            }

            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`);

        });

        //No pizza:
        it("Should throw  message when no pizza is ordered", () => {
            let order = {}
            // when it have to throw err we should add a function before:
            expect(() => pizzUni.makeAnOrder(order)).to.throw('You must order at least 1 Pizza to finish the order.');
            // or
            // expect(pizzUni.makeAnOrder.bind(order)).to.throw();
        });

        //Only drink:
        it("Should throw  message when only drink is ordered", () => {
            let order = {
                orderedDrink: 'Pepsi',
            }
            expect(() => pizzUni.makeAnOrder(order)).to.throw('You must order at least 1 Pizza to finish the order.');

        });

        //No order:
        it("Should throw  message when there is no order", () => {
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        });

    });



    describe("getRemainingWork tests", () => {

        it("Should return all orders completed when one ready status is given", () => {
            let statusArr = [{
                pizzaName: 'Margaritta',
                status: 'ready',

            }];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });

        it("Should return all orders completed when two ready status is given", () => {
            let statusArr = [{
                    pizzaName: 'Margaritta',
                    status: 'ready',

                },
                {
                    pizzaName: 'Italiana',
                    status: 'ready',

                }
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });

        // one preparing:
        it("Should return remaining pizzas when one pending order", () => {
            let statusArr = [{
                    pizzaName: 'Margaritta',
                    status: 'preparing',

                },
                {
                    pizzaName: 'Italiana',
                    status: 'ready',

                }
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Margaritta.`);
        });

        // more preparing:
        it("Should return remaining pizzas when one pending order", () => {
            let statusArr = [{
                    pizzaName: 'Margaritta',
                    status: 'preparing',

                },
                {
                    pizzaName: 'Italiana',
                    status: 'preparing',

                }
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Margaritta, Italiana.`);
        });

    });



    describe("orderType tests", () => {

        it("Should return total sum when type of order is Delivery", () => {
            let totalSum = 10;
            let orderType = 'Delivery';

            expect(pizzUni.orderType(totalSum, orderType)).to.be.equal(totalSum);
        });
    });

    it("Should return total sum with discount when type of order is 'Carry Out'", () => {
        let totalSum = 10;
        let orderType = 'Carry Out';

        expect(pizzUni.orderType(totalSum, orderType)).to.be.equal(9)
    });

    it("Should return total sum with discount when type of order when using float number", () => {
        let totalSum = 9.84;
        let orderType = 'Carry Out';

        expect(pizzUni.orderType(totalSum, orderType)).to.be.equal(8.856)
    });
});

/*
•	makeAnOrder(obj) - A function that accepts an object:
o	the object includes {orderedPizza: ‘the name of the pizza’, orderedDrink: ‘the name of the drink’}
o	the function checks if there are ordered pizza and a drink.
o	Then the function returns confirmation message for your order
•	getRemainingWork(statusArr) - A function that accepts array:
o	the array should look like: [{pizzaName: ‘the name of the pizza’, status: ‘ready’ / ‘preparing’ }, …]
o	the function checks the status of the order and returns a message with the order status
•	orderType(totalSum, typeOfOrder) - A function that accepts two parameters (number, string):
o	the function first checks what is the type of the order (‘Carry Out’ , ‘Delivery’)
o	if the type of the order is ‘Carry Out’ you get 10% discount
o	then the function returns the total sum of the order

*/

//function()  === () =>

//test working:
// describe("makeAnOrder tests", () =>{

//     it("TODO …", () =>{
//         expect(true).to.be.equal(true);
//     });
//  }); 


//(null, order)???
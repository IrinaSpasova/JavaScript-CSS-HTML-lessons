function orders(product, qty) {
    //get product price
    let price = 0;
    switch (product) {

        case `coffee`:
            price = 1.50;
            break;
        case `water`:
            price = 1.00;
            break;
        case `coke`:
            price = 1.40;
            break;
        case `snacks`:
            price = 2.00;
            break;

    }
    //calculate total
    let total = price * qty;

    //print result
    console.log(total.toFixed(2));

}

orders(`water`, 5)

/* 

function orders(product, qty) {
    //get product price
    let price = getPrice(product);
    
    //calculate total
    let total = price * qty;

    //print result
    console.log(total.toFixed(2));

    function getPrice(product){
        switch (product) {

        case `coffee`:
            return 1.50;
            
        case `water`:
            return 1.00;
            
        case `coke`:
            return 1.40;
            
        case `snacks`:
            return 2.00;
           

    }
    }

}

  */ 
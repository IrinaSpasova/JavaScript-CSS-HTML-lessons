



function data(a, b, c) {



    if (a > b && a > c) {
        console.log(a);
        if (b > c) {
            console.log(b);
            console.log(c);
        }
        if (b <= c) {
            console.log(c);
            console.log(b);
        }
       
    }

    if (b > a && b > c) {
        console.log(b);
        if (a > c) {
            console.log(a);
            console.log(c);
        }
        if (a <= c) {
            console.log(c);
            console.log(a);
        }
        
    }

    if (c > a && c > b) {
        console.log(c);
        if (a > b) {

            console.log(a);
            console.log(b);
        }
        if (a <= b) {

            console.log(b);
            console.log(a);
        }

        
    }


}

data(0, 0, 3)
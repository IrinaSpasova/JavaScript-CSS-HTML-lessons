function data(input) {

    let change = Number(input[0]);

    /*LOGIC*/
    let counter = 0;
    let step = 2;

    /*let counter1 =0;
    let counter50 =0;
    let counter20 =0;
    let counter10 =0;
    let counter5 =0;
    let counter2 =0;
    let counter1 =0;*/
    while (true) {
        change = Number((change-step).toFixed(2));
        if (change < 0) {
            change=Number((change+step).toFixed(2));
            switch (step) {
                case 2:
                    step = 1;break;
                case 1:
                    step = 0.5;break;
                case 0.5:
                    step = 0.2;break;
                case 0.2:
                    step = 0.1;break;
                case 0.1:
                    step = 0.05;break;
                case 0.05:
                    step = 0.02;break;
                case 0.02:
                    step = 0.01;  break;
            }
           
        } else if (change === 0) {
            counter++;
            console.log(`${counter}`);
            return;
        } else {
            counter++;
        }
    }



}
data(["0.56"]);
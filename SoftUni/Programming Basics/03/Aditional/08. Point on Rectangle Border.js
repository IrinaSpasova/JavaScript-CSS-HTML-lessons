function data(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    /*LOGIC*/

    if ((x1 <= x && x <= x2) && (y1 == y)) {
        console.log("Border");
        return;
    }
    if ((y1 <= y && y <= y2) && (x1 == x)) {
        console.log("Border");
        return;
    }
    if ((x1 <= x && x <= x2) && (y2 == y)) {
        console.log("Border");
        return;
    }
    if ((y1 <= y && y <= y2) && (x2 == x)) {
        console.log("Border");
        return;
    }

    // if ((x1 < x && x < x2) && (y1 < y && y < y2)){
    //     console.log("Inside");
    // }else{
    //     console.log("Outside");
    // }
    console.log("Inside / Outside" );



}
data([2,-3,12,3,12,-1])
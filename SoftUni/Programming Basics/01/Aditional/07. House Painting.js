function data(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);


    /*LOGIC*/

    /*walls*/
    let smallWallsS = 2 * (x * x);
    let bigWallsS = 2 * (x * y);
    let windows = 2 * (1.5 * 1.5);
    let door = 1.2 * 2;
    let paintForWalls = (smallWallsS + bigWallsS) - (windows + door);
    let greenPaint = paintForWalls / 3.4;

    /*roof*/
    let rectangles = 2 * (x * y);
    let triangles = 2 * ((h * x) / 2);
    let roofS = rectangles + triangles;
    let roofPaint = roofS / 4.3;

    console.log(greenPaint.toFixed(2))
    console.log (roofPaint.toFixed(2));
}

data(["6",
    "10",
    "5.2"
])
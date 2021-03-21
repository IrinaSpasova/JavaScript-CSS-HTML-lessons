function data(input) {
    let time = Number(input[0]);
    let day = input[1].toLowerCase();

    /*LOGIC*/
    if (day === "sunday") {
        console.log("closed");
    }else if (time >= 10 && time <= 18) {
        console.log("open");
    } else {
        console.log("closed");
    }

}
data(["12", "tuesday"])
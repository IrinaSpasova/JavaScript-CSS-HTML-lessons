function data(input) {
    let num = input + "";
    let numAsList = num.split(``);
    let numAsListReversed = numAsList.reverse();

    if (numAsListReversed[0] == 1) {
        console.log("one");
    }

    if (numAsListReversed[0] == 2) {
        console.log("two");
    }

    if (numAsListReversed[0] == 3) {
        console.log("three");
    }

    if (numAsListReversed[0] == 4) {
        console.log("four");
    }

    if (numAsListReversed[0] == 5) {
        console.log("five");
    }

    if (numAsListReversed[0] == 6) {
        console.log("six");
    }

    if (numAsListReversed[0] == 7) {
        console.log("seven");
    }

    if (numAsListReversed[0] == 8) {
        console.log("eight");
    }

    if (numAsListReversed[0] == 9) {
        console.log("nine");
    }

    if (numAsListReversed[0] == 0) {
        console.log("zero");
    }

}
data(8255967)

/*друго решение:

  Scanner scanner = new Scanner(System.in);
        long number = Long.parseLong(scanner.nextLine());
        long absNum = Math.abs(number);
        long lastNum = number % 10;
        String englishNumName = "";
*/
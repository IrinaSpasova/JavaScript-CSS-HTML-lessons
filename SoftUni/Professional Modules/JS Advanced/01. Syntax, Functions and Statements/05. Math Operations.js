function data(a, b, c) {

    switch (c) {
        case '+':
            console.log(+a + +b);
            break;

        case '-':
            console.log(+a - +b);
            break;

        case '*':
            console.log(+a * +b);
            break;

        case '/':
            console.log(+a / +b);
            break;

        case '%':
            console.log(+a % +b);
            break;

            case '**':
                console.log((+a) ** +b);
                break;
    }


}

data(5, 6, '+')

function solve(input) {

    //let rgx = /^([$%])[A-Z][a-z]{2,}\1: (\[\d+\]\|){3}$/g;
    //izrraz, който ще ни свърши работа:
    let rgx = /^([$%])([A-Z][a-z]{2,})\1: \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;
    input.shift();

    input.forEach(el => {
        let arr = el.match(rgx);
        console.log(arr);
        if (arr) {
            let tag = arr[2];
            let message = String.fromCharCode(arr[3]) +
                String.fromCharCode(arr[4]) +
                String.fromCharCode(arr[5]);
            console.log(tag);
            console.log(message);
        } else {
            console.log('Not found!');
        }
    });


}

solve([3, '$Requests$: [73]|[115]|[105]|'])

//^([$%])[A-Z][a-z]{2,}\1: \[\d+\]\|\[\d+\]\|\[\d+\]\|$    ==== ^([$%])[A-Z][a-z]{2,}\1: (\[\d+\]\|){3}$

//[$%]  - Означава, че или $ или % трябва да мачне;

//Ima razlika ot s 'g' i bez 'g'!!!!!!!!!!!!!!!!!!
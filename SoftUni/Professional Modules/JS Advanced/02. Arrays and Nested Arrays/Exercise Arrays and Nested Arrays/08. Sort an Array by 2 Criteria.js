function sorting(input) {
    input.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);

        return firstCriteria || secondCriteria;

    });

    console.log(input.join(`\n`));
    }
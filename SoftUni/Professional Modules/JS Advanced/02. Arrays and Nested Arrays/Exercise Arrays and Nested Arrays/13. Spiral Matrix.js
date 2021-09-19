function spiralMatrix(a,b) {

    rows = a 
    columns= b

    let matrix = []

    for (let i = 0; i < rows; i++) {

        matrix[i] = [];

        for (let j = 0; j < columns; j++) {
            matrix[i][j] = 0;
        }

    }

    let top = 0;
    let right = columns - 1;
    let bottom = rows - 1;
    let left = 0;

    let counter = 1;

    while (top <= bottom & left <= right) {
        for (let col = left; col <= right; col++) {
            matrix[top][col] = counter;
            counter++
        }
        top++;
        for (let row = top; row <= bottom; row++) {

            matrix[row][right] = counter;
            counter++
        }
        right--;
        for (let col = right; col >= left; col--) {
            matrix[bottom][col] = counter;
            counter++;

        }
        bottom--;
        for (let row = bottom; row >= top; row--) {
            matrix[row][left] = counter;
            counter++

        }
        left++
    }console.log(matrix.map(x=> x.join(' ')).join('\n'));
    

}
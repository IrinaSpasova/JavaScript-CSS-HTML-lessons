function negativeOrPositiveNumbers(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            newArr.unshift(array[i]);
        } else if (array[i] >= 0) {
            newArr.push(array[i]);
        }
    }
    console.log(`${newArr.join(`\n`)}`);
}


/* 
function negativeOrPositive(arr) {
    let result = [];
    for (let iterator of arr) {
        iterator < 0 ? result.unshift(iterator) : result.push(iterator);
    }
    console.log(result.join('\n'));
}

* ('\n'))- печата елементите в стринга, направеен от join, на нов ред.


function negativePositiveNumbers(arr) {
  let result = [];  
  for (let num of arr){
    if (num < 0){
      result.unshift(num); // Insert at the start
   } else {
      result.push(num);    // Append at the end
  } 
  console.log(result.join('\n'));
 }
}


*/
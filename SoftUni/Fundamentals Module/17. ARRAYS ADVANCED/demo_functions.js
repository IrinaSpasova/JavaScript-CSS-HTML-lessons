/* Функции, които са със същото действие, каквото са и вградениеte:

myIncludes=== includes (връща true или false)
myIndexOff = indexOff
mySlice = slice
mySplice = splice
myMap = map
myFilter = filter





let myArr = [5, 8, -3, 11, 44];

 tests
console.log(myIndexOff(myArr, 8));
console.log(myIndexOff(myArr, 10));
*/

/*
function myIncludes(arr, value) {
    //Iterate through all element and compare them with the value;
    //if a single element is a match - return true;
    //at the end of array return false;

    for (let element of arr) {
        if (element == value) {
            return true;
        }
    }
    return false;
}

function myIndexOff(arr, value) {
//Iterate through all element and compare them with the value;
    //if a single element is a match - return its index;
    //at the end of array return -1;
    for (let i =0; i<arr.length; i++) {
        
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}*/

/*
let myArr = [5, 8, -3, 11, 44];
let newArr = mySlice(myArr, 1, 3);
console.log(newArr);
console.log(myArr);

function mySlice(arr, start, end){
    // create variable to store result;
//iterate through all elements of the array, starting at index "start" and stopping BEFORE index "end";
// copy the elements of the array;
// return result;

if (start == undefined){
    start =0;
}
if (end ==undefined){
    end= arr.length;
}


let result = [];
for (let i = start; i< end; i++){
    result.push(arr[i]);
}
return result;
}



//test
let myArr = [5, 8, -3, 11, 44];
let removed = mySplice(myArr, 3, 2, ["a","b","c"]);
console.log("after", removed);


//test
function mySplice(arr, start, count, insert) {
    // slice from 0 to "start(left part)";
    //slice from "start" to "start+count"(removed part);
    //slice from "start + " count" to end (right part)
    

//delete all elements from arr;
//push all elements from left part to arr ;
   
    //push new elements to arr;
    // push all elements from right to arr;
 //(temp) return removed part;


    let left = arr.slice(0, start);
    let removed = arr.slice(start, start + count);
    let right = arr.slice(start + count);

// !!!! Ако променим дължината на масива на 0 - масивът ще бъде изтрит!!!!!
  arr.length = 0;


  for (let element of left){
      arr.push(element)
  }
if( insert != undefined) { 
       for (let element of insert) {
        arr.push(element);

    }
}

    for (let element of right) {
        arr.push(element);

    }
    return removed;
}*/

/*

let myArr = [5, 8, -3, 11, 44];
let myFunc = x => x+1;
let nums = myMap(myArr, myFunc);
console.log(nums);
function myMap(arr, operation){

    let result = [];
    for (let element of arr){
        result.push(operator(element));
    }
    return result;
}*/


/*
let myArr = [5, 8, -3, 11, 44];
let nums = myFilter(myArr, x=> x>4);
console.log(nums);
function myFilter(arr, predicate) {
    let result = [];
    
    for (let element of arr) {
        if (predicate(element)) {
            result.push(element);
        }
    }

    return result;
}

// С if (predicate(element)) казваме "ако предиката е верен- върни   "
// x => x % 2 === 0 - връща само четните числа;

*/
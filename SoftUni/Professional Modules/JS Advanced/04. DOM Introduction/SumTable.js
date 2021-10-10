/*function sumTable() {
 let table = document.querySelectorAll("table tr");

 let total = 0;

 for (let i = 1; i < table.length; i++) {

    let cols = table[i].children;
    let cost = cols[cols.length-1].textContent;
    total+=Number(cost);
  
 }

 document.getElementById("sum").textContent = total;

}*/

function sumTable() {
let costTDElements = Array.from(document.querySelectorAll('tr td:nth-child(2)'));
let sumElement = costTDElements.pop();

let sum = costTDElements.reduce((a,x)=> a+ Number(x.textContent),0);

sumElement.textContent = sum;
}
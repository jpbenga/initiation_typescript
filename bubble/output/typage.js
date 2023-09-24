"use strict";
function sum(x, y) {
    let x1 = parseInt(x);
    let y2 = parseInt(y);
    return x1 + y2;
}
function display(array) {
    for (const number of array) {
        console.log(number);
    }
}
let compare = function (number1, number2) { return number1 == number2; };
console.log(sum("1", "2"));
display([1, 2, 3]);
console.log(compare(1, 2));

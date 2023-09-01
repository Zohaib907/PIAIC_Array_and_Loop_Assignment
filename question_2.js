"use strict";
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers?
function printEven(arr) {
    console.log("Even numbers: ");
    for (let i = 0; i < arr.length; ++i) {
        if ((arr[i] % 2) == 0) {
            console.log(arr[i]);
        }
    }
}
printEven([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

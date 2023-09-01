"use strict";
//  - Write a program that uses a function to find the largest element in an array of numbers?
function findLargestNumber(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log('Largest Number is:', findLargestNumber([0, 8, 90, 2, 3456789, -1, 5]));

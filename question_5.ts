//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
function removeBadGrades(arr:number[]){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] < 50) {
            arr.splice(i,1);
        }
    }
    return arr;
}
let grades:number[]= [73,67,38,98,34,40,90,13,99];
console.log('All Grades are: '+ grades);
console.log('After Removing bad grades: ' + removeBadGrades(grades));
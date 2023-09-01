// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop?
function addUpEvenNumbers(n: number){
    let total = 0;
    for (let i=0;i<n;i++) {
      total += (i*2);
    }
    return total;
}
console.log("Sum of First N Even Numbers:",addUpEvenNumbers(5));
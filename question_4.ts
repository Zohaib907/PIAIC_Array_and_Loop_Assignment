//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateAreaOfCircle(radius: number){
    return Math.PI * (radius **2);
}
let radius = 5;
if (radius <= 0){
    console.log("Radius must be positive and greater than zero");
}
else{
    console.log('The area of the circle is: ' + calculateAreaOfCircle(radius));
}
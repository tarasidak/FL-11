let sideA = +prompt('sideA');
let sideB = +prompt('sideB');
let sideC = +prompt('sideC');

if (sideA + sideB < sideC || sideB + sideC < sideA || sideA + sideC < sideB) {
    console.log('Triangle doesn’t exist');
} else if (sideA === sideB && sideA === sideC && sideB === sideC) {
    console.log('Eequivalent triangle');
} else if (sideA === sideB || sideA === sideC || sideB === sideC) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}

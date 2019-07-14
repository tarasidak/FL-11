const isInteger = num => (num ^ 0) === num;
console.log(isInteger(6.3));
console.log(isInteger(9));
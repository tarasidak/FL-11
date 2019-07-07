let a1 = +prompt('a1 X coordinate');
let a2 = +prompt('a2 Y coordinate');
let b1 = +prompt('b1 X coordinate');
let b2 = +prompt('b2 Y coordinate');
let c1 = +prompt('c1 X coordinate');
let c2 = +prompt('c2 Y coordinate');
let div = 2;
let x = (a1 + b1)/div;
let y = (a2 + b2)/div;
if (x === c1 && y === c2){
    console.log(true);
} else {
    console.log(false);
}
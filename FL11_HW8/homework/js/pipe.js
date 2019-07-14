function addOne(x){
    return x + 1;
}

const pipe = (num, ...args) => {
    let result = num;
    for(let i = 0; i < args.length; i++){
        result = args[i](result);
    }
    return result;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));
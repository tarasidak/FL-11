const reverseNumber = (num) => {
    let reverse = 0;
    while(num !== 0){
        reverse = reverse * 10;
        reverse = reverse + num % 10;
        num = num - num % 10;
        num = num / 10;
    }
    console.log(reverse);
}
reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);
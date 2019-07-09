while (confirm('Do you want to play a game?')) {

    let maxPrize = 100;
    let plusRandom = 4;
    let divider = 2;
    let myPrize = 0;
    let random = 8;
    let attempts = 3;
  
    do {
        let yourPrize = maxPrize;
        let number = Math.floor(Math.random() * random) + 1;
        for (; attempts > 0; attempts--) {
            let myChoice = +prompt('Choose a roulette pocket number from 0 to ' + random +
                ' \n Attempts left: ' + attempts + '\n Total prize: ' + myPrize +
                '$ \n Possible prize on current attempt: ' + yourPrize + '$');
  
            if (myChoice === number) {
                myPrize = myPrize + yourPrize;
                random = random + plusRandom;
                maxPrize = maxPrize * divider;
                break;
            }
            yourPrize = yourPrize / divider;
        }
        if (attempts < 1) {
            alert('Thank you for your participation. Your prize is: ' + myPrize + '$');
            break;
        }
    } while (confirm('Congratulation, you won! Your prize is: ' + myPrize + '$. Do you want to continue?'));
  }
  alert('You did not become a billionaire, but can.');
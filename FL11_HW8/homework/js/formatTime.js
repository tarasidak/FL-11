const formatTime = time => {
    let days = Math.floor(time / 1440);
    let hours = Math.floor(time / 60) % 24;
    let minutes = time % 60;
    console.log(days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minutes(s)');
}
formatTime(120);
formatTime(59);
formatTime(3601);
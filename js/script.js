var clock = {
    hour: 0,
    minutes: 0,
    seconds: 0
}
var timerId;
var elementHour = document.querySelector('.hour');
var elementMinutes = document.querySelector('.minutes');
var elementSeconds = document.querySelector('.seconds');

var getClock = function () {
    elementSeconds.innerHTML = clock.seconds;
    elementMinutes.innerHTML = clock.minutes;
    elementHour.innerHTML = clock.hour;
    clock.seconds++;

    if (clock.seconds === 59) {
        clock.seconds = 0;
        clock.minutes++;
    }

    if (clock.minutes === 59) {
        clock.minutes = 0;
        clock.hour++;
    }

    if (clock.hour === 24) {
        clock.hour = 0;
        clock.minuts = 0;
        clock.seconds = 0;
    }
}

timerId = setInterval(getClock, 1000);

var div = document.getElementById('circle');
var listener = function(e) {
  div.style.left = e.pageX + "px";
  div.style.top = e.pageY + "px";
};


  document.addEventListener('mousemove', listener);

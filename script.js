var milliSeconds = 0,
  seconds = 0,
  mins = 0;
var counter;

var startBtn = document.querySelector(".start");
var resetBtn = document.querySelector(".reset");
var stopBtn = document.querySelector(".stop");

var time = document.querySelector(".time");

startBtn.addEventListener("click", () => {
  if (!counter) {
    counter = setInterval(startTimer, 10); //runs every 10milli seconds
  }
  function startTimer() {
    time.textContent = mins + ":" + seconds + ":" + milliSeconds;
    milliSeconds++;
    //if the millisec is 100, increase the seconds
    if (milliSeconds === 100) {
      milliSeconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      mins++;
    }
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(counter);
  counter = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(counter);
  counter = false;
  (milliSeconds = 0), (seconds = 0), (mins = 0);
  time.textContent = mins + ":" + seconds + ":" + milliSeconds;
});

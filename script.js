function startTimer() {

   setInterval(function calculateRemainingTime() {

    const inputValue = document.getElementById("dateTime-current");
    const inputStr = inputValue.value;

    // console.log(inputValue.value);
    const startTime = Date.now();
    const endTime = new Date(inputStr);
    // console.log(endTime.getTime());
  
    const elaspedTimeInSec = Math.floor((endTime - startTime) / 1000);
    const elaspedTimeInMins = Math.floor(elaspedTimeInSec / 60);
    const elaspedTimeInHours = Math.floor(elaspedTimeInSec / 3600);
    const elaspedTimeInDays = Math.floor(elaspedTimeInSec / 86400);
  
    const secsTimer = document.querySelector(".seconds-count");
    const minsTimer = document.querySelector(".minutes-count");
    const hoursTimer = document.querySelector(".hours-count");
    const daysTimer = document.querySelector(".days-count");
  
    if (elaspedTimeInSec > 0 &&  elaspedTimeInSec <= 60) {
      secsTimer.innerHTML = elaspedTimeInSec;
    } else if (elaspedTimeInDays >= 0) {
      daysTimer.innerHTML = elaspedTimeInDays;
      hoursTimer.innerHTML = elaspedTimeInHours - elaspedTimeInDays * 24;
      minsTimer.innerHTML = elaspedTimeInMins - elaspedTimeInHours * 60;
      secsTimer.innerHTML = elaspedTimeInSec - elaspedTimeInMins * 60;
    }
  },1000)

}

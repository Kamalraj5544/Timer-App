// const date = new Date();
// const [currentYear, currentMonth, currentday] = [
//   date.getFullYear(),
//   date.getMonth() + 1,
//   date.getDate(),
// ];

// console.log(currentYear, currentMonth, currentday);

// console.log(Date.now());

function timerDate() {
  const inputValue = document.getElementById("dateTime-current");
  const inputStr = inputValue.value;
  console.log(inputValue.value);
  const startTime = Date.now()
  const endTime = new Date(inputStr);
  console.log(endTime.getTime())

  const elaspedTimeInSec = (endTime - startTime)/1000;
  const elaspedTimeInMin = elaspedTimeInSec/60;

  const secsTimer = document.querySelector(".seconds-count")
  secsTimer.innerHTML = elaspedTimeInSec.toString()
}

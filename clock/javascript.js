function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('textClock').innerHTML =
  h + " : " + m + " : " + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setDate = () => {
  const date = new Date();
  const hour = date.getMinutes();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const hoursDegrees = ((minute / 12) * 360) +90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

  const minutesDegrees = ((minute / 60) * 360) +90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

  const secondsDegrees = ((second / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}
setInterval(setDate, 1000);
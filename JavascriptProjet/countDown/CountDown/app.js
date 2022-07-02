const dayE1 = document.getElementById('day');
const hourE1 = document.getElementById('hour');
const minE1 = document.getElementById('min');
const secondE1 = document.getElementById('second');

const newYear = '31 aug 2022 ';

function contDown() {
  const newYearDate = new Date(newYear);
  console.log(newYearDate);
  const currentYear = new Date();

  const totalseconds = (newYearDate - currentYear) / 1000;
  const day = Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const min = Math.floor(totalseconds / 60) % 60;
  const second = Math.floor(totalseconds) % 60;

  console.log(day, hours, min, second);

  dayE1.innerHTML = formaTime(day);
  hourE1.innerHTML = formaTime(hours);
  minE1.innerHTML = formaTime(min);
  secondE1.innerHTML = second;
}

function formaTime(time) {
  return time < 10 ? `0${time}` : time;
}
contDown();
setInterval(contDown, 1000);

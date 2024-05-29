const timer = document.querySelector("#timer");

function getTimer() {
  const christmas = new Date("2024-12-25");
  const today = new Date();
  const day_gap = christmas - today;
  const day = String(Math.floor(day_gap / (1000 * 60 * 60 * 24))).padStart(3, "0");
  const hour = String(Math.floor(day_gap / (1000 * 60 * 60) % 24)).padStart(2, "0");
  const min = String(Math.floor(day_gap / (1000 * 60) % 60)).padStart(2, "0");
  const sec = String(Math.floor(day_gap / 1000 % 60)).padStart(2, "0");

  timer.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
}
getTimer();
setInterval(getTimer, 1000);
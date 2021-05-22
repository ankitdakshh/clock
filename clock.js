function showTime() {
  setInterval(() => {
    let hours;
    let minutes;
    let seconds;
    // let a = new Date().getTime();
    hours = String(new Date().getHours()).padStart(2, 0);
    minutes = String(new Date().getMinutes()).padStart(2, 0);
    seconds = String(new Date().getSeconds()).padStart(2, 0);
    let time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
  }, 1000);
}

showTime();

String.prototype.toHHMMSS = function () {
  debugger;
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};

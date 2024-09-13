function play() {
    var audio = new Audio('naruto.wav');
    audio.play();
  }


setInterval(()=>{
    function updateClock() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
      }
updateClock();
},1000)




function setAlarm() {
    let alarmTime = document.getElementById('alarmTime').value;
    if (alarmTime && alarmTime > 0) {
      setTimeout(() => {
        play();
      }, alarmTime * 1000);
    } else {
      alert('Please enter a valid time in seconds.');
    }
  }

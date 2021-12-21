let seconds = 0
let minutes = 0
let hour = 0
let interval

function start() {
  interval = setInterval(timer, 1)
}
function pause() {
  clearInterval(interval)
}
function stop() {
  clearInterval(interval)
  seconds = 0
  minutes = 0
  document.getElementById('timer').innerText = '00:00'
}

function timer() {
  seconds++
  if (seconds == 60) {
    minutes++
    seconds = 0
    if (minutes == 60) {
      minutes = 00
      hour++
    }
  }
  document.getElementById('timer').innerText =
    hour + ':' + minutes + ':' + seconds
}

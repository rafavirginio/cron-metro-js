let seconds = 0
let minutes = 0
let hour = 0
let interval

function digits(digit) {
  if (digit < 10) {
    return '0' + digit
  } else {
    return digit
  }
}

function start() {
  timer()
  interval = setInterval(timer, 1000)
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
    digits(hour) + ':' + digits(minutes) + ':' + digits(seconds)
}

class Timer {
  constructor(hourSelectTimer, minutesSelectTimer, secondesSelectTimer, start, stop, restart, pause ) {
  this.hourSelectTimer = hourSelectTimer  
  this.minutesSelectTimer = minutesSelectTimer 
  this.secondesSelectTimer = secondesSelectTimer

  this.start = start
  this.stop = stop
  this.restart = restart
  this.pause = pause

  this.timerHours;
  this.timerMinutes;
  this.timerSeconds;

  this.timerText = timerText
}


TimerEvent() {
  this.start.addEventListener('click', () => {
  this.timerHours = this.hourSelectTimer.value 
  this.timerMinutes = this.hourSelectTimer.value 
  this.timerSeconds = this.secondesSelectTimer.value 
  const TIME = ((this.timerHours * 3600 + this.timerMinutes * 60 + this.timerSeconds) * 1000)
    this.timerText.innerHTML = this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    this.NewTimer(TIME)
    this.pause.disabled = false
    this.stop.disabled = false
    this.restart.disabled = false
    this.start.disabled = true
  })
  
  this.stop.addEventListener('click', () => {
    this.pause.innerHTML = 'Pause'
    this.StopTimer()
    this.timerText.innerHTML = 0 + ":" + 0 + ":" + 0;
    this.start.disabled = false
  })
  
  this.restart.addEventListener('click', () => {
    this.pause.innerHTML = 'Pause'
    this.StopTimer()
    this.timerHours = this.hourSelectTimer.value 
    this.timerMinutes = this.minutesSelectTimer.value 
    this.timerSeconds = this.secondesSelectTimer.value 
    const TIME = ((this.timerHours * 3600 + this.timerMinutes * 60 + this.timerSeconds) * 1000)
    this.timerText.innerHTML = this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    this.NewTimer(TIME)
  })
  
  this.pause.addEventListener('click', () => {
  if (this.pause.innerHTML == 'Pause') {
    this.StopTimer()
    this.pause.innerHTML = 'Resume'
    } 
  else {
    this.pause.innerHTML = 'Pause'
    const TIME = ((this.timerHours * 3600 + this.timerMinutes * 60 + this.timerSeconds) * 1000)
    this.timerText.innerHTML = this.timerHours + ":" + this.timerMinutes + ":" + this.timerSeconds;
    this.NewTimer(TIME)
  }
  })
}

NewTimer(TIME) {
  this.timerInterval = setInterval(this.StartTimer, 1000, this)
  this.timerTimer = setTimeout(this.StopTimer, TIME)
}
  
StopTimer() {
  clearInterval(this.timerInterval)
  clearTimeout(this.timerTimer)
}

StartTimer(Timer) {
if (Timer.timerSeconds > 0) {
  Timer.timerSeconds--
} 
else if (Timer.timerSeconds == 0 && Timer.timerMinutes > 0) {
  Timer.timerMinutes--
  Timer.timerSeconds = 59
}
else if (Timer.timerSeconds == 0 && Timer.timerMinutes == 0 && Timer.timerHours > 0) {
  Timer.timerHours--
  Timer.timerMinutes = 59
  Timer.timerSeconds = 59
}
if (Timer.timerSeconds == 0 && Timer.timerMinutes == 0 && Timer.timerHours == 0) {
  alert('¡SE ACABÓ EL TIEMPO!')
  ButtonTimerReset(startTimer, stopTimer, restartTimer, pauseTimer)
}
Timer.timerText.innerHTML = Timer.timerHours + ":" + Timer.timerMinutes + ":" + Timer.timerSeconds;
}

ButtonTimerReset(Timer) {
  Timer.pause.disabled = true
  Timer.stop.disabled = true
  Timer.restart.disabled = true
  Timer.start.disabled = false
}
}

class Timer {
  constructor(hour_select_timer, minutes_select_timer, seconds_select_timer, start, stop, restart, pause ) {
  this.hour_select_timer = hour_select_timer  
  this.minutes_select_timer = minutes_select_timer 
  this.seconds_select_timer = seconds_select_timer

  this.start = start
  this.stop = stop
  this.restart = restart
  this.pause = pause

  this.timer_hours;
  this.timer_minutes;
  this.timer_seconds;

  this.timer_text = timer_text
}


TimerEvent() {
  this.start.addEventListener('click', () => {
  this.timer_hours = this.hour_select_timer.value 
  this.timer_minutes = this.hour_select_timer.value 
  this.timer_seconds = this.seconds_select_timer.value 
  var time = ((this.timer_hours * 3600 + this.timer_minutes * 60 + this.timer_seconds) * 1000)
    this.timer_text.innerHTML = this.timer_hours + ":" + this.timer_minutes + ":" + this.timer_seconds;
    this.NewTimer(time)
    this.pause.disabled = false
    this.stop.disabled = false
    this.restart.disabled = false
    this.start.disabled = true
  })
  
  this.stop.addEventListener('click', () => {
    this.pause.innerHTML = 'Pause'
    this.StopTimer()
    this.timer_text.innerHTML = 0 + ":" + 0 + ":" + 0;
    this.start.disabled = false
  })
  
  this.restart.addEventListener('click', () => {
    this.pause.innerHTML = 'Pause'
    this.StopTimer()
    this.timer_hours = this.hour_select_timer.value 
    this.timer_minutes = this.minutes_select_timer.value 
    this.timer_seconds = this.seconds_select_timer.value 
    var time = ((this.timer_hours * 3600 + this.timer_minutes * 60 + this.timer_seconds) * 1000)
    this.timer_text.innerHTML = this.timer_hours + ":" + this.timer_minutes + ":" + this.timer_seconds;
    this.NewTimer(time)
  })
  
  this.pause.addEventListener('click', () => {
  if (this.pause.innerHTML == 'Pause') {
    this.StopTimer()
    this.pause.innerHTML = 'Resume'
    } 
  else {
    this.pause.innerHTML = 'Pause'
    var time = ((this.timer_hours * 3600 + this.timer_minutes * 60 + this.timer_seconds) * 1000)
    this.timer_text.innerHTML = this.timer_hours + ":" + this.timer_minutes + ":" + this.timer_seconds;
    this.NewTimer(time)
  }
  })
}

NewTimer(time) {
  this.intervalo_temporizador = setInterval(this.StartTimer, 1000, this)
  this.temporizador_temporizador = setTimeout(this.StopTimer, time)
}
  
StopTimer() {
  clearInterval(this.intervalo_temporizador)
  clearTimeout(this.temporizador_temporizador)
}

StartTimer(Timer) {
if (Timer.timer_seconds > 0) {
  Timer.timer_seconds--
} 
else if (Timer.timer_seconds == 0 && Timer.timer_minutes > 0) {
  Timer.timer_minutes--
  Timer.timer_seconds = 59
}
else if (Timer.timer_seconds == 0 && Timer.timer_minutes == 0 && Timer.timer_hours > 0) {
  Timer.timer_hours--
  Timer.timer_minutes = 59
  Timer.timer_seconds = 59
}
if (Timer.timer_seconds == 0 && Timer.timer_minutes == 0 && Timer.timer_hours == 0) {
  alert('¡SE ACABÓ EL TIEMPO!')
  ButtonTimerReset(start_timer, stop_timer, restart_timer, pause_timer)
}
Timer.timer_text.innerHTML = Timer.timer_hours + ":" + Timer.timer_minutes + ":" + Timer.timer_seconds;
}

ButtonTimerReset(Timer) {
  Timer.pause.disabled = true
  Timer.stop.disabled = true
  Timer.restart.disabled = true
  Timer.start.disabled = false
}
}

class temporizador {
  constructor(select_horas_temporizador, select_minutos_temporizador, select_segundos_temporizador, start, stop, restart, pause ) {
  this.select_horas_temporizador = select_horas_temporizador  
  this.select_minutos_temporizador = select_minutos_temporizador 
  this.select_segundos_temporizador = select_segundos_temporizador

  this.start = start
  this.stop = stop
  this.restart = restart
  this.pause = pause

  this.horas_temporizador;
  this.minutos_temporizador;
  this.segundos_temporizador;

  this.text_temporizador = text_temporizador
}


evento_temporizador() {
  this.start.addEventListener('click', () => {
  this.horas_temporizador = this.select_horas_temporizador.value 
  this.minutos_temporizador = this.select_horas_temporizador.value 
  this.segundos_temporizador = this.select_segundos_temporizador.value 
  var time = ((this.horas_temporizador * 3600 + this.minutos_temporizador * 60 + this.segundos_temporizador) * 1000)
    this.text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
    this.crearTemporizador(time)
    this.pause.disabled = false
    this.stop.disabled = false
    this.restart.disabled = false
    this.start.disabled = true
  })
  
  this.stop.addEventListener('click', () => {
    this.pause.innerHTML = 'Pause'
    this.stopTemporizador()
    this.text_temporizador.innerHTML = 0 + ":" + 0 + ":" + 0;
    this.start.disabled = false
  })
  
  this.restart.addEventListener('click', () => {
    this.pause.innerHTML = 'Pause'
    this.stopTemporizador()
    this.horas_temporizador = this.select_horas_temporizador.value 
    this.minutos_temporizador = this.select_minutos_temporizador.value 
    this.segundos_temporizador = this.select_segundos_temporizador.value 
    var time = ((this.horas_temporizador * 3600 + this.minutos_temporizador * 60 + this.segundos_temporizador) * 1000)
    this.text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
    this.crearTemporizador(time)
  })
  
  this.pause.addEventListener('click', () => {
  if (this.pause.innerHTML == 'Pause') {
    this.stopTemporizador()
    this.pause.innerHTML = 'Resume'
    } 
  else {
    this.pause.innerHTML = 'Pause'
    var time = ((this.horas_temporizador * 3600 + this.minutos_temporizador * 60 + this.segundos_temporizador) * 1000)
    this.text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
    this.crearTemporizador(time)
  }
  })
}

crearTemporizador(time) {
  this.intervalo_temporizador = setInterval(this.activarTemp, 1000)
  this.temporizador_temporizador = setTimeout(this.stopTemporizador, time)
}
  
stopTemporizador() {
  clearInterval(this.intervalo_temporizador)
  clearTimeout(this.temporizador_temporizador)
}

activarTemp() {
if (this.segundos_temporizador > 0) {
  this.segundos_temporizador--
} 
else if (this.segundos_temporizador == 0 && this.minutos_temporizador > 0) {
  this.minutos_temporizador--
  this.segundos_temporizador = 59
}
else if (this.segundos_temporizador == 0 && this.minutos_temporizador == 0 && this.horas_temporizador > 0) {
  this.horas_temporizador--
  this.minutos_temporizador = 59
  this.segundos_temporizador = 59
}
if (this.segundos_temporizador == 0 && this.minutos_temporizador == 0 && this.horas_temporizador == 0) {
  alert('¡SE ACABÓ EL TIEMPO!')
  resetBotonesTemp(start_temp, stop_temp, restart_temp, pause_temp)
}
  this.text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
}
resetBotonesTemp(start, stop, restart, pause) {
  pause.disabled = true
  stop.disabled = true
  restart.disabled = true
  start.disabled = false
}
}

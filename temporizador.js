class temporizador {
constructor(select_horas_temporizador, select_minutos_temporizador, select_segundos_temporizador) {
this.select_horas_temporizador = select_horas_temporizador  
this.select_minutos_temporizador = select_minutos_temporizador 
this.select_segundos_temporizador = select_segundos_temporizador

this.horas_temporizador
this.minutos_temporizador
this.segundos_temporizador
}


evento_temporizador() {
  var start = document.getElementById("start_temporizador");
  var stop = document.getElementById("stop_temporizador");
  var restart = document.getElementById("restart_temporizador");
  var pause = document.getElementById("pause_temporizador");

  start.addEventListener('click', () => {
      this.horas_temporizador = this.select_horas_temporizador.value 
      this.minutos_temporizador = this.select_horas_temporizador.value 
      this.segundos_temporizador = this.select_segundos_temporizador.value 
      var time = ((this.horas_temporizador * 3600 + this.minutos_temporizador * 60 + this.segundos_temporizador) * 1000)
      this.text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
      this.crearTemporizador(time)
      pause.disabled = false
      stop.disabled = false
      restart.disabled = false
      start.disabled = true
    })
  
    stop.addEventListener('click', () => {
      pause.innerHTML = 'Pause'
      this.stopTemporizador()
      this.text_temporizador.innerHTML = 0 + ":" + 0 + ":" + 0;
      start.disabled = false
    })
  
    restart.addEventListener('click', () => {
      pause.innerHTML = 'Pause'
      this.stopTemporizador()
      this.horas_temporizador = this.select_horas_temporizador.value 
      this.minutos_temporizador = this.select_minutos_temporizador.value 
      this.segundos_temporizador = this.select_segundos_temporizador.value 
      var time = ((this.horas_temporizador * 3600 + this.minutos_temporizador * 60 + this.segundos_temporizador) * 1000)
      this.text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
      this.crearTemporizador(time)
    })
  
    pause.addEventListener('click', () => {
      if (pause.innerHTML == 'Pause') {
        this.stopTemporizador()
        pause.innerHTML = 'Resume'
      } else {
        pause.innerHTML = 'Pause'
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
    } else if (this.segundos_temporizador == 0 && this.minutos_temporizador > 0) {
        this.minutos_temporizador--
        this.segundos_temporizador = 59
    } else if (this.segundos_temporizador == 0 && this.minutos_temporizador == 0 && this.horas_temporizador > 0) {
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

class temporizador {
constructor(select_horas_temporizador, select_minutos_temporizador, select_segundos_temporizador, horas_temporizador, minutos_temporizador, segundos_temporizador) {
this.select_horas_temporizador = document.getElementById("horas_temporizador");
this.select_minutos_temporizador = document.getElementById("minutos_temporizador");
this.select_segundos_temporizador = document.getElementById("segundos_temporizador");

this.horas_temporizador
this.minutos_temporizador
this.segundos_temporizador

}
}

function evento_temporizador(start, stop, restart, pause) {
    start.addEventListener('click', () => {
        this.horas_temporizador = this.select_horas_temporizador.value //
        this.minutos_temporizador = this.select_horas_temporizador.value // 
        this.segundos_temporizador = this.select_segundos_temporizador.value //
      var time = ((this.horas_temporizador * 3600 + this.minutos_temporizador * 60 + this.segundos_temporizador) * 1000)
      this.text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
      crearTemporizador(time)
      pause.disabled = false
      stop.disabled = false
      restart.disabled = false
      start.disabled = true
    })
  
    stop.addEventListener('click', () => {
      pause.innerHTML = 'Pause'
      stopTemporizador()
      this.text_temporizador.innerHTML = 0 + ":" + 0 + ":" + 0;
      start.disabled = false
    })
  
    restart.addEventListener('click', () => {
      pause.innerHTML = 'Pause'
      stopTemporizador()
      this.horas_temporizador = this.select_horas_temporizador.value //
      this.minutos_temporizador = this.select_minutos_temporizador.value //
      this.segundos_temporizador = this.select_segundos_temporizador.value //
      var time = ((horas_temporizador * 3600 + minutos_temporizador * 60 + segundos_temporizador) * 1000)
      text_temporizador.innerHTML = horas_temporizador + ":" + minutos_temporizador + ":" + segundos_temporizador;
      crearTemporizador(time)
    })
  
    pause.addEventListener('click', () => {
      if (pause.innerHTML == 'Pause') {
        stopTemporizador()
        pause.innerHTML = 'Resume'
      } else {
        pause.innerHTML = 'Pause'
        var time = ((this.horas_temporizador * 3600 + this.minutos_temporizador * 60 + this.segundos_temporizador) * 1000)
        text_temporizador.innerHTML = this.horas_temporizador + ":" + this.minutos_temporizador + ":" + this.segundos_temporizador;
        crearTemporizador(time)
      }
    })
  }

  function crearTemporizador(time) {
    intervalo_temporizador = setInterval(activarTemp, 1000)
    temporizador_temporizador = setTimeout(stopTemporizador, time)
  }
  
  function stopTemporizador() {
    clearInterval(intervalo_temporizador)
    clearTimeout(temporizador_temporizador)
  }

  function activarTemp() {
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

  function createlistaFlags() {
    var tiempo_parcial = document.getElementById('tiempos_parciales')
    var elementoNodo = document.createElement('li');
    var textoNodo = document.createTextNode(this.minutos_crono + ":" + this.segundos_crono + ":" + this.milisegundos_crono);
  
    elementoNodo.appendChild(textoNodo);
    tiempo_parcial.appendChild(elementoNodo);
  }
  
  function deletelistaFlags() {
    var tiempo_parcial = document.getElementById('tiempos_parciales')
    var elementos_lista = tiempo_parcial.getElementsByTagName('li')
    for (i = elementos_lista.length - 1; i >= 0; i--) {
      tiempo_parcial.removeChild(elementos_lista[i]);
    }
  }
  
  function resetBotonesTemp(start, stop, restart, pause) {
    pause.disabled = true
    stop.disabled = true
    restart.disabled = true
    start.disabled = false
  }

  //arregalr value
class crono {
constructor(contador_crono, minutos_crono, segundos_crono, milisegundos_crono, text_cronometro ) {
this.contador_crono = 0
this.minutos_crono = 0
this.segundos_crono = 0
this.milisegundos_crono = 0
this.text_cronometro = document.getElementById("text_cronometro");
}
}

function evento_crono(start, flag) {
  start.addEventListener('click', () => {
    if (start.innerHTML == 'Start') {
      crearIntervaloCrono()
      flag.disabled = false
      start.innerHTML = 'Stop'
    } else {
      stopIntervaloCrono()
      this.contador_crono = 0
      this.minutos_crono = 0
      this.segundos_crono = 0
      this.milisegundos_crono = 0
      this.text_cronometro.innerHTML = 0 + ":" + 0 + ":" + 0;
      this.contador_crono = 0
      start.innerHTML = 'Start'
      deletelistaFlags()
    }
  })

  flag.addEventListener('click', () => {
    createlistaFlags()
  })
}

function activarCrono() {
  this.contador_crono++
  if (this.contador_crono < 100) {
    this.milisegundos_crono = contador_crono
  } else if (this.contador_crono == 100) {
    this.contador_crono = 0
    this.segundos_crono++
    if (this.segundos_crono == 60) {
      this.segundos_crono = 0
      this.minutos_crono++
    }
  }
  text_cronometro.innerHTML = this.minutos_crono + ":" + this.segundos_crono + ":" + this.milisegundos_crono;
}

function crearIntervaloCrono() {
  intervalo_cronometro = setInterval(activarCrono, 10)
}

function stopIntervaloCrono() {
  clearInterval(intervalo_cronometro)
}

//primera interaccion undefined
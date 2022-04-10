class crono {
constructor(contador_crono, minutos_crono, segundos_crono, milisegundos_crono, text_cronometro) {
this.contador_crono = contador_crono
this.minutos_crono = minutos_crono
this.segundos_crono = segundos_crono
this.milisegundos_crono = milisegundos_crono
this.text_cronometro = text_cronometro
this.intervalo_cronometro = null
}


evento_crono() {
  var start = document.getElementById("start_cronometro");
  var flag = document.getElementById("flag_cronometro");
  start.addEventListener('click', () => {
    if (start.innerHTML == 'Start') {
      this.crearIntervaloCrono()
      flag.disabled = false
      start.innerHTML = 'Stop'
    } else {
      this.stopIntervaloCrono()
      this.contador_crono = 0
      this.minutos_crono = 0
      this.segundos_crono = 0
      this.milisegundos_crono = 0
      this.text_cronometro.innerHTML = 0 + ":" + 0 + ":" + 0;
      this.contador_crono = 0
      start.innerHTML = 'Start'
      this.deleteListFlags()
    }
  })

  flag.addEventListener('click', () => {
    this.createListFlags()
  })
}

createListFlags() {
  var tiempo_parcial = document.getElementById('tiempos_parciales')
  var elementoNodo = document.createElement('li');
  var textoNodo = document.createTextNode(this.minutos_crono + ":" + this.segundos_crono + ":" + this.milisegundos_crono);

  elementoNodo.appendChild(textoNodo);
  tiempo_parcial.appendChild(elementoNodo);
}

deleteListFlags() {
  var tiempo_parcial = document.getElementById('tiempos_parciales')
  var elementos_lista = tiempo_parcial.getElementsByTagName('li')
  for (var i = elementos_lista.length - 1; i >= 0; i--) {
    tiempo_parcial.removeChild(elementos_lista[i]);
  }
}


activarCrono(crono) {
  crono.contador_crono++
  if (crono.contador_crono < 100) {
  crono.milisegundos_crono = crono.contador_crono
  }
  if (crono.contador_crono == 100) {
  crono.contador_crono = 0
  crono.segundos_crono++
  if (crono.segundos_crono == 60) {
  crono.segundos_crono = 0
  crono.minutos_crono++
  }
  }
  text_cronometro.innerHTML = crono.minutos_crono + ":" + crono.segundos_crono + ":" + crono.milisegundos_crono;
  }
  
  crearIntervaloCrono() {
  this.intervalo_cronometro = null
  this.intervalo_cronometro = setInterval(this.activarCrono, 10, this) //no funciona por el this. delante
  }
  
  stopIntervaloCrono() {
      clearInterval(this.intervalo_cronometro)
      this.intervalo_cronometro = null
  }
}
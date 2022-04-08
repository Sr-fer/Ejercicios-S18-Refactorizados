class crono {
constructor(contador_crono, minutos_crono, segundos_crono, milisegundos_crono, text_cronometro) {
this.contador_crono = contador_crono
this.minutos_crono = minutos_crono
this.segundos_crono = segundos_crono
this.milisegundos_crono = milisegundos_crono
this.text_cronometro = text_cronometro
this.intervalo_cronometro = null
}


evento_crono(start_crono,  flag_crono) {
var start = start_crono //undefined 
var flag = flag_crono //undefined 
  start.addEventListener('click', () => {
    if (start.innerHTML == 'Start') {
      this.crearIntervaloCrono() //no funciona por el this. delante
      flag.disabled = false
      start.innerHTML = 'Stop'
    } else {
      this.stopIntervaloCrono() //no funciona por el this. delante
      this.contador_crono = 0
      this.minutos_crono = 0
      this.segundos_crono = 0
      this.milisegundos_crono = 0
      this.text_cronometro.innerHTML = 0 + ":" + 0 + ":" + 0;
      this.contador_crono = 0
      start.innerHTML = 'Start'
      this.deleteListFlags() //no funciona por el this. delante
    }
  })

  flag.addEventListener('click', () => {
    this.createListFlags() //no funciona por el this. delante
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


activarCrono() {
  this.contador_crono++
  if (this.contador_crono < 100) {
    this.milisegundos_crono = this.contador_crono
  } if (this.contador_crono == 100) {
    this.contador_crono = 0
    this.segundos_crono++
    if (this.segundos_crono == 60) {
      this.segundos_crono = 0
      this.minutos_crono++
    }
  }
  text_cronometro.innerHTML = this.minutos_crono + ":" + this.segundos_crono + ":" + this.milisegundos_crono;
}

crearIntervaloCrono() {
  this.intervalo_cronometro = null
  this.intervalo_cronometro = setInterval(this.activarCrono , 10) //no funciona por el this. delante
}

stopIntervaloCrono() {
  this.intervalo_cronometro = null
  clearInterval(this.intervalo_cronometro)
}
}
//primera interaccion undefined
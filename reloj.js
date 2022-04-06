class reloj {
constructor(text_reloj, fecha){
this.text_reloj = text_reloj;
this.fecha = fecha 
this.hora = fecha.getHours()
this.minutos = fecha.getMinutes()
this.segundos = fecha.getSeconds()
this.intervalo_reloj = null
}  

activarReloj() {
this.fecha = new Date()
this.hora = this.fecha.getHours()
this.minutos =  this.fecha.getMinutes()
this.segundos =  this.fecha.getSeconds()
this.text_reloj.innerHTML =  this.hora + ":" +  this.minutos + ":" +  this.segundos;
}
      
stopIntervaloReloj() { 
clearInterval(this.intervalo_reloj);
}

crearIntervaloReloj() {
    this.intervalo_reloj = setInterval(this.activarReloj, 1000);
}
}

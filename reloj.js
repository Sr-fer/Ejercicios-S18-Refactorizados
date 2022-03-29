class reloj {
constructor(text_reloj, fecha, hora, minutos, segundos){
this.text_reloj = document.getElementById("text_reloj");
this.fecha = new Date();
this.hora = this.fecha.getHours();
this.minutos = this.fecha.getMinutes();
this.segundos = this.fecha.getSeconds();
}  
}

function activarReloj() {
    this.text_reloj.innerHTML =  this.hora + ":" +  this.minutos + ":" +  this.segundos;
}
      
function stopIntervaloReloj() {
clearInterval(this.intervalo_reloj);
}

function crearIntervaloReloj() {
    this.intervalo_reloj = setInterval(activarReloj, 1000);
    }

function reset() {
    var fecha = new Date();
    document.getElementById("text_reloj").innerHTML = fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();
    document.getElementById("text_cronometro").innerHTML = "00:00:00";
    document.getElementById("text_temporizador").innerHTML = "00:00:00";
  }

//undefined cuando pasa el tiempo
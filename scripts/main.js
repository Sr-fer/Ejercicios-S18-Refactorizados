var activar_reloj, activar_cronometro, activar_temporizador
var startChrono, flagChrono, startTimer, stopTimer, restartTimer

/*
Permite crear el evento que muestre el primer argumento y oculte los otros dos
*/
function evento_activar(show, hide1, hide2) {
  var div_show, div_hide1, div_hide2;

  div_show = document.getElementById(show.id.split("_")[1]);
  div_hide1 = document.getElementById(hide1.id.split("_")[1]);
  div_hide2 = document.getElementById(hide2.id.split("_")[1]);
  //Al diseñar los divs de tal manera que su nombre sea la extensión del resto de elmentos podemos
  //Referenciarlos simplemente dividiendo la cadena del ID del resto y recogiendo el primer elemento.
  show.addEventListener("click", () => {
  reset();
  div_show.hidden = false;
  div_hide1.hidden = true;
  div_hide2.hidden = true;
});
}

function reset() {
  const FECHA = new Date()
  document.getElementById("clockText").innerHTML = FECHA.getHours() + ":" + FECHA.getMinutes() + ":" + FECHA.getSeconds();
  document.getElementById("chronoText").innerHTML = "00:00:00";
  document.getElementById("timerText").innerHTML = "00:00:00";
}

/* 
Función para establecer la funcionalidad de los botones
*/
function botones() {
  //Botones de selección.
  activar_reloj = document.getElementById("activar_reloj");
  activar_cronometro = document.getElementById("activar_cronometro");
  activar_temporizador = document.getElementById("activar_temporizador");

  //Funciones de eventos activar.
  evento_activar(activar_reloj, activar_cronometro, activar_temporizador);
  evento_activar(activar_cronometro, activar_reloj, activar_temporizador);
  evento_activar(activar_temporizador, activar_cronometro, activar_reloj);

  //Funcion de eventos de acción.
  //evento_crono(start_crono, flag_crono)
  //evento_temporizador(start_temp, stop_temp, restart_temp, pause_temp)
}


function __main__() {
  preload();
  reset();
  botones();
  var Clock1 = new Clock(document.getElementById("clockText"), new Date())
  var Chrono1 = new Chrono(0, 0, 0, 0, document.getElementById("chronoText"), document.getElementById("startChrono"), document.getElementById("flagChrono"))
  var Timer1 = new Timer(document.getElementById("timerHours"), document.getElementById("timerMinutes"), document.getElementById("timerSeconds"),  document.getElementById("startTimer"), document.getElementById("stopTimer"), document.getElementById("restartTimer"), document.getElementById("pauseTimer"))
  Clock1.StartClock()
  Clock1.NewClockInterval() 
  Chrono1.ChronoEvent()
  Timer1.TimerEvent()


  //Vamos a utilizar el objeto "window" para establecer las variables de los intervalos y temporizadores de forma global
  //Y no tener que utilizar parámetros para enviar o recibirlas, pues puede acabar liándonos en estos ejercicos.

  window.intervalo_reloj = null;
  window.intervalo_cronometro = null;
  window.temporizador_temporizador = null;
  window.intervalo_temporizador = null;
}

__main__();


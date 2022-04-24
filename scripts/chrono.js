class Chrono {
  constructor(chrono_counter, chrono_minutes, chrono_seconds, chrono_miliseconds, chrono_text, start, flag) {
  this.chrono_counter = chrono_counter
  this.chrono_minutes = chrono_minutes
  this.chrono_seconds = chrono_seconds
  this.chrono_miliseconds = chrono_miliseconds
  this.chrono_text = chrono_text
  this.start = start
  this.flag = flag
  this.chrono_interval = null
}


ChronoEvent() {
  this.start.addEventListener('click', () => {
  if( this.start.innerHTML == 'Start') {
    this.NewChronoInterval()
    this.flag.disabled = false
    this.start.innerHTML = 'Stop'
} 
  else {
    this.StopChronoInterval()
    this.chrono_counter = 0
    this.chrono_minutes = 0
    this.chrono_seconds = 0
    this.chrono_miliseconds = 0
    this.chrono_text.innerHTML = 0 + ":" + 0 + ":" + 0;
    this.chrono_counter = 0
    this.start.innerHTML = 'Start'
    this.DeleteFlagList()
}
})
this.flag.addEventListener('click', () => {
  this.CreateFlagList()
})
}

CreateFlagList() {
  var partial_time = document.getElementById('partial_temps')
  var element_node = document.createElement('li');
  var node_text = document.createTextNode(this.chrono_minutes + ":" + this.chrono_seconds + ":" + this.chrono_miliseconds);

  element_node.appendChild(node_text);
  partial_time.appendChild(element_node);
}

DeleteFlagList() {
  var partial_time = document.getElementById('partial_temps')
  var elementos_lista = partial_time.getElementsByTagName('li')
  for (var i = elementos_lista.length - 1; i >= 0; i--) {
  partial_time.removeChild(elementos_lista[i]);
}
}


StartChrono(Chrono) {
  Chrono.chrono_counter++
if (Chrono.chrono_counter < 100) {
  Chrono.chrono_miliseconds = Chrono.chrono_counter
  }
if (Chrono.chrono_counter == 100) {
  Chrono.chrono_counter = 0
  Chrono.chrono_seconds++
if (Chrono.chrono_seconds == 60) {
  Chrono.chrono_seconds = 0
  Chrono.chrono_minutes++
}
}
  chrono_text.innerHTML = Chrono.chrono_minutes + ":" + Chrono.chrono_seconds + ":" + Chrono.chrono_miliseconds;
}
  
NewChronoInterval() {
  this.chrono_interval = null
  this.chrono_interval = setInterval(this.StartChrono, 10, this)
}
  
StopChronoInterval() {
  clearInterval(this.chrono_interval)
  this.chrono_interval = null
}
}
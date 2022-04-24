class Clock {
    constructor(clock_text, date){
    this.clock_text = clock_text;
    this.date = date 
    this.hour = date.getHours()
    this.minutes = date.getMinutes()
    this.seconds = date.getSeconds()
    this.clock_interval = null
}  

StartClock() {
    this.date = new Date()
    this.hour = this.date.getHours()
    this.minutes =  this.date.getMinutes()
    this.seconds =  this.date.getSeconds()
    this.clock_text.innerHTML =  this.hour + ":" +  this.minutes + ":" +  this.seconds;
}
      
StopClockInterval() { 
    clearInterval(this.clock_interval);
}

NewClockInterval() {
    this.clock_interval = setInterval(this.StartClock, 1000);
}
}
/*
 * Christmas lights
 */
 
var b = require('bonescript');

var currentLED;

// Turn off the LEDs
for(var i = 0; i < 4; i++) {
  currentLED = 'USR' + i;
  b.pinMode(currentLED, 'out');
  b.digitalWrite(currentLED, b.LOW);
}

var state, unstate;

setInterval(blink, 500);

function blink() {
  state = (state) ? 0 : 1;
  unstate = Math.abs(state -1);
    
  b.digitalWrite('USR0', state);
  b.digitalWrite('USR1', unstate);
  b.digitalWrite('USR2', state);
  b.digitalWrite('USR3', unstate);
}

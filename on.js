/*
 * Turn 4 LEDs on
 */

var b = require('bonescript');
var currentLED;

for(var i = 0; i < 4; i++) {
  currentLED = 'USR' + i;
  b.pinMode(currentLED, 'out');
  b.digitalWrite(currentLED, b.HIGH);
}

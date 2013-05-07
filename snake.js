/*
 * Snake
 */

var b = require('bonescript');
var currentLED;

// Turn off the LEDs
for(var i = 0; i < 4; i++) {
  currentLED = 'USR' + i;
  b.pinMode(currentLED, 'out');
  b.digitalWrite(currentLED, b.LOW);
}

var current = 0;

setInterval(snakeHead, 500);

function snakeHead() {
  current = (current + 1) % 4;
  for(var i = 0; i < 4; i++) {
    b.digitalWrite('USR' + i, b.LOW);
  }
  b.digitalWrite('USR' + current, b.HIGH);   
}

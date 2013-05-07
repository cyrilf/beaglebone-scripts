/*
 * Pong
 */

var b = require('bonescript');
var currentLED, intensity;

// Init rackets
for(var i = 0; i < 4; i++) {
  currentLED = 'USR' + i;
  b.pinMode(currentLED, 'out');
  intensity = (i === 0 || i === 3) ? 1 : 0;
  b.digitalWrite(currentLED, intensity);
}

var isLeft = true;

setInterval(drawBall, 500);

function drawBall() {
  isLeft = !isLeft;
    
  if(isLeft) {
    b.digitalWrite('USR1', b.HIGH);
    b.digitalWrite('USR2', b.LOW);
  } else {
    b.digitalWrite('USR1', b.LOW);
    b.digitalWrite('USR2', b.HIGH);
  }
}

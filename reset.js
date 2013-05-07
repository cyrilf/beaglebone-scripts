/*
 * Reset 4 LEDs to default state
 */

var b = require('bonescript');
var path = '/sys/class/leds/beaglebone:green:usr';

// Turn off the 4 LEDs
for(var i = 0; i < 4; i++) {
  b.digitalWrite('USR' + i, b.LOW);
}

// Reset
resetUSR0();

function resetUSR0() {
  b.writeTextFile(path + '0/trigger', 'heartbeat', resetUSR1);
}
function resetUSR1() {
  b.writeTextFile(path + '1/trigger', 'mmc0', resetUSR2);
}
function resetUSR2() {
  b.writeTextFile(path + '2/trigger', 'cpu0', resetUSR3);
}
function resetUSR3() {
  b.writeTextFile(path + '3/trigger', 'mmc1', complete);
}
function complete() {
  console.log('LEDs reset to default state');
}

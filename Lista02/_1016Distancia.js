var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = parseInt(input.split('\n'));

let qtdMinutos = (60 * lines) / 30;

console.log(qtdMinutos + " minutos");
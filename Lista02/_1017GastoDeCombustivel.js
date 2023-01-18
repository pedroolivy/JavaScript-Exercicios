var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempoGastoEmH = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());
let distanciaPercorrida = velocidadeMedia * tempoGastoEmH;
let qtdCombustivel = distanciaPercorrida / 12;

console.log(qtdCombustivel.toFixed(3));
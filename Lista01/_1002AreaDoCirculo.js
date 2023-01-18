var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var pi = 3.14159;
var raio = parseFloat(input);
var A = pi * Math.pow(raio, 2);

console.log("A=" + A.toFixed(4));
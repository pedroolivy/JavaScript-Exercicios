var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nFuncionario = lines.shift();
var htFuncionario = lines.shift();
var vh = lines.shift();
var salario = htFuncionario*vh;

console.log("NUMBER = " + nFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));
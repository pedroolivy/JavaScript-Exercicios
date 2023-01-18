var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var salarioFix = parseFloat(lines.shift());
var totalVendas = parseFloat(lines.shift());
var comissao = totalVendas*0.15;
var salarioFinal = salarioFix+comissao;

console.log("TOTAL = R$ " + salarioFinal.toFixed(2));
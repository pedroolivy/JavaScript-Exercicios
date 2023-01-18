var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let qtdDias = parseInt(lines);

let qtdAnos, qtdMeses;

qtdAnos = parseInt(qtdDias / 365);
qtdDias = qtdDias % 365;

qtdMeses = parseInt(qtdDias / 30);
qtdDias = qtdDias % 30;

let resultado = `${qtdAnos} ano(s)
${qtdMeses} mes(es)
${qtdDias} dia(s)`;

console.log(resultado);
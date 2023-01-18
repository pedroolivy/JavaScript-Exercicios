var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let qtdSegundos = parseInt(input);

const qtdHoras = parseInt(qtdSegundos / 3600);
qtdSegundos %= 3600;

const qtdMinutos = parseInt(qtdSegundos / 60);
qtdSegundos %= 60;

console.log(`${qtdHoras}:${qtdMinutos}:${qtdSegundos}`);
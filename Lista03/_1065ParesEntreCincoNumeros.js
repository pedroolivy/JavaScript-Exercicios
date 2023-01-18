var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var lines = input.split('\n');

var i, qtdNumeros = 5, numeros, contador = 0;

for(i=0; i<qtdNumeros; i++){
    numeros = parseInt(lines.shift());
    if(numeros % 2 === 0){
        contador++;
    }
}
console.log(contador + " valores pares");
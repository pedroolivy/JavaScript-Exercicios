var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [disPer, combGast] = input.split("\n");
const consuMedio = disPer / combGast;

console.log(consuMedio.toFixed(3) + " km/l");
// Aula 03 - Avaliação de Curto-Circuito (Short-Circuit)

/*
 * Operadores lógicos
 * && - false && true -> false "retorna o valor da última checagem"
 * || - true && false -> vai retornar o valor verdadeiro
 * FALSY: false, 0, '', "", ``, null, undefined, NaN
 * Qualquer coisa diferente de falsy, retorna true
 */

// console.log('Luiz Otávio' && 0 && 'Maria'); //? retorna 0
// console.log('Luiz Otávio' && true && 'Maria'); //? retorna Maria
// console.log('Luiz Otávio' && true && NaN); //? retorna NaN

// console.log('Luiz' && 'Maria'); //? retorna Maria
// console.log('Luiz' && '' && 'Maria'); //? retorna a string vazia

// TODO retorna esses valores, pois ele verifica se a expressão é true ou false,
// TODO se for false, retorna o valor falso, se for verdadeiro,
// TODO retorna o último valor verificado

// function falaOi() {
//   return 'Oi';
// }

// const vaiExecutar = false;
// console.log(vaiExecutar && falaOi()); //? retorna false

// let vaiExecutar;
// console.log(vaiExecutar && falaOi()); //? retorna undefined

// const vaiExecutar = 'Joãozinho';
// console.log(vaiExecutar && falaOi()); //? retorna Oi

//? retorna o primeiro valor verdadeiro, nesse caso Luiz Otávio
// console.log(0 || false || null || 'Luiz Otávio' || true);

// const corUsuario = null;
// const corPadrao = 'red';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao); //? preto

// const corUsuario = 'vermelho';
// const corPadrao = corUsuario || 'preto';
// console.log(corPadrao); //? vermelho

const a = 0;
const b = null;
const c = 'false'; //? tipo string, não boolean
const d = false;
const e = NaN;

console.log(a || b || c || d || e); //? retorna a string false

// Aula 10 - Operadores aritméticos, de atribuição e incremento

//* Aritméticos comuns + - * /
// const num1 = 5;
// const num1 = '5'; // ? no caso do sinal de +, a saída será uma concatenação por conta de num1 ser string
// const num2 = 10;

// console.log(num1 + num2);

//* Potenciação **
// const num1 = 2;
// const num2 = 10;
// console.log(num1 ** num2);

//* Resto da divisão %
// const num1 = 10;
// const num2 = 3;
// console.log(num1 % num2);

//* Ordem de precedência
// const num1 = 5;
// const num2 = 2;
// const num3 = 10;
// console.log(num1 + num2 + num2 + num1);
// console.log(num1 + num2 * num3);
// console.log((num1 + num2) * num3); // ? Os parênteses alteram a ordem de precedência
// console.log((num1 * num2) / num3);

//* Operador de Incremento (variavel++)
// let contador = 1;
// contador++; // ? contador = 2
// contador++; // ? contador = 3
// contador++; // ? contador = 4
// contador++; // ? contador = 5
// console.log(contador);

//* Operador de Pré-Incremento (++variavel) incrementa e depois retorna
// let contador = 1;
// ++contador; // ? contador = 2
// ++contador; // ? contador = 3
// ++contador; // ? contador = 4
// ++contador; // ? contador = 5
// console.log(contador);
// let contador1 = 1;
// let contador2 = 1;
// console.log('Contador 1 tem: ' + contador1);
// console.log('Contador 1 tem: ' + contador1++);
// console.log('Contador 1 tem: ' + contador1);

// console.log('Contador 2 tem: ' + contador2);
// console.log('Contador 2 tem: ' + ++contador2);
// console.log('Contador 2 tem: ' + contador2);

//* Operador de Pré-Decremento (--variavel)
// let contador1 = 10;
// console.log('Contador 1 tem: ' + contador1);
// console.log('Contador 1 tem: ' + --contador1);
// console.log('Contador 1 tem: ' + contador1);

//* Operador de Decremento (variavel--) decrementa e depois retorna
// let contador1 = 10;
// console.log('Contador 1 tem: ' + contador1);
// console.log('Contador 1 tem: ' + contador1--);
// console.log('Contador 1 tem: ' + contador1);

//* Formas de facilitar a escrita de atribuições
// const passo = 50;
// let contador = 0;
// contador += passo;

// let contador = 0;
// contador += 2;
// contador += 2;
// contador += 2;
// console.log(contador);

// let contador = 2;
// contador *= 2;
// contador *= 2;
// contador *= 2;
// console.log(contador);

// let contador = 2;
// contador **= 10;
// console.log(contador);

//* NaN (Not a Number)
// const num1 = 10;
// const num2 = 'Luiz';
// console.log(num1 * num2);

// const num1 = 10;
// const num2 = '5';
// console.log(num1 * num2); // ? resultado 50

//* Conversão para inteiro
const num1 = 10;
// const num2 = parseInt('5');
// const num2 = parseFloat('5.2');
const num2 = Number('5.2');
console.log(num1 * num2);
console.log(typeof num2);

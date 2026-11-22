// Aula 01 - Operadores de comparação

/*
 * Operadores de comparação
 * > maior que
 * >= maior ou igual que
 * < menor que
 * <= menor ou igual que
 * == igualdade (verifica o valor)
 * === igualdade estrita (verifica o valor e tipo)
 * != diferente (verifica o valor)
 * !== direfente estrita (verifica o valor e tipo)
 */

// const comparacao = 10 > 5; //? 10 é maior que 5? true
// const comparacao = 10 >= 5; //? 10 é maior ou igual a 5? true
// const comparacao = 10 >= 10; //? 10 é maior ou igual a 10? true
// const comparacao = 10 >= 11; //? 10 é maior ou igual a 11? false
// const comparacao = 10 < 11; //? 10 é menor que 11? true
// const comparacao = 10 <= 11; //? 10 é menor ou igual a 11? true
// const comparacao = 12 <= 11; //? 12 é menor ou igual a 11? false

// const num1 = 10;
// const num2 = 11;
// const comparacao = num1 < num2; //? num1 que é 10 é menor do que num2 que é 11? true

// const num1 = 10;
// const num2 = 10;
// const num2 = 11;
// const comparacao = num1 == num2; //? num1 que é 10 é igual a num2 que é 10? true
// const comparacao = num1 == num2; //? num1 que é 10 é igual a num2 que é 11? false

// const num1 = 10; //? number
// const num2 = '10'; //? string
//? o js faz conversão de tipo para fazer a operação (não é recomendado utilizar ==)
// const comparacao = num1 == num2; //? num1 que é 10 é igual a num2 que é 10 mesmo sendo string? true

// const num1 = 10; //? number
// const num2 = '10'; //? string
//? o js verifica o valor e o tipo da variável
// const comparacao = num1 === num2; //? num1 que é 10 é igual a num2 que é 10 e do mesmo tipo? false

//? não é recomendado utilizar !=
// const num1 = 10; //? number
// const num2 = 10; //? string
// const comparacao = num1 != num2; //? num1 que é 10 é diferente de num2 que é 10? false

// const num1 = 10; //? number
// const num2 = '10'; //? string
//? o js faz conversão de tipo para fazer a operação (não é recomendado utilizar ==)
// const comparacao = num1 != num2; //? num1 que é 10 é diferente de num2 que é 10 mesmo sendo string? false

const num1 = 10; //? number
const num2 = 10; //? number
//? o js verifica o valor e o tipo da variável
const comparacao = num1 !== num2; //? num1 que é 10 é diferente de num2 que é 10 e do mesmo tipo? false

// console.log(10 > 5); //? true
console.log(comparacao);

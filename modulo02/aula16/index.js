// Aula 16 - FUnções

//* Declaração de Função
// function saudacao() {
//   console.log('Bom dia!');
// }
// saudacao();

//? Parâmetro é a variável declarada na definição da função.
//? Argumento é o valor real passado quando a função é chamada

// function saudacao(nome) {
//   console.log(`Bom dia ${nome}!`);
// }
// saudacao('Amanda');
// saudacao('Maria');
// saudacao('Felipe');

// function saudacao(nome) {
//   console.log(`Bom dia ${nome}!`);
//   return `Bom dia ${nome}!`;
// }
// const variavel = saudacao('Amanda');
// console.log(variavel);

// function soma(num1, num2) {
//   const resultado = num1 + num2;
//   return resultado;
// console.log('Olá mundo'); //? tudo que vier depois de return dentro da função não é executado
// }
// console.log(soma(2, 2));
// console.log(resultado); //!erro pois a variável está apenas dentro do escopo da função
// const resultado = soma(2, 2); //? essa variável está em escopo diferente da variável da função
// console.log(resultado);

// const resultado = soma(); //? retorna NaN pois não foi passado os valores para os parâmetros da função
// console.log(resultado);

// function soma(num1 = 1, num2 = 1) {
//   const resultado = num1 + num2;
//   return resultado;
// }
// const resultado = soma(); //? soma vai receber num1 como 1 e num2 com 1 já que não foi passado valor na chamada
// const resultado = soma(4); //? soma vai receber num1 como 4 e num2 com 1 já foi passado apenas 1 valor
// const resultado = soma(4); //? soma vai receber num1 como 4 e num2 com 2 já foi passado dois valores
// console.log(resultado);

//* Função anônima (precisa de ; no final da função)
// const raiz = function (n) {
//   return n ** 0.5; //? retorna a raiz quadrada
// };

// console.log(raiz(9));

//* Arrow Function
// const raiz = (n) => {
//   return n ** 0.5;
// };

// const raiz = n => n ** 0.5;
const raiz = (n) => n ** 0.5;

console.log(raiz(9));

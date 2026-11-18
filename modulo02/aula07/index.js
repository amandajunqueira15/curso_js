//? Não podemos criar constantes com palavras reservadas
//? Constantes precisam ter nomes significativos, pois o código pode ficar confuso
//? Não podemos começar o nome de uma constante com número
//? Não podem conter espaços ou traços
//? Utilizamos camelCase
//? Case Sensitive (diferenciação entre letras maiúsculas e minúsculas)
//? Não podemos modificar o valor de uma constante
//? Não utilizar var, utilizar const
//? Sempre inicializar o valor da constante

// const nome; //!erro

// const nome = 'João';
// console.log(nome);

// const nome = 'João';
// nome = 'Ana'; //!erro

// let nome = 'João';
// nome = 'Ana';

// const primeiroNumero = 5;
const primeiroNumero = '5';
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
// console.log(resultado);
// console.log(resultadoDuplicado);
// console.log(resultadoTriplicado);
// console.log(primeiroNumero);

// console.log(typeof primeiroNumero);

// console.log(primeiroNumero + segundoNumero);

console.log(typeof (primeiroNumero + segundoNumero));

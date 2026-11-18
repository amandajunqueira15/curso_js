// Aula 09 - Tipos de dados primitivos

// TODO Tipos de dados primitivos

//* String
const nome1 = 'Luiz';
const nome2 = `Luiz`;

//* Number
const primeiroNumero = 10;
const segundoNumero = 10.52;

//* Undefined (não aponta para local nenhum na memória)
let nomeAluno; // ? variável foi declarada, mas não recebeu nenhum valor (ou não existe)

//* Null (não aponta para local nenhum na memória)
const sobrenomeAluno = null; // ? null é um valor vazio atribuído intencionalmente pelo programador

//* Boolean (valor lógico de verdadeiro ou falso)
const casado = false; // ? falso
const aprovado = true; // ? verdadeiro

//* typeof é uma função para ver o tipo de dado
console.log(typeof nome1, primeiroNumero);
console.log(typeof sobrenomeAluno);

// TODO Tipos Não-Primitivos / Referência (Mutáveis e passados por referência)
const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);

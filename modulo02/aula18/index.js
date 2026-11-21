// Aula 18 - Valores primitivos e valores por referência

//* Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint, symbol (Valores copiados)

// let nome = 'Luiz';
// console.log(nome[0]); //? L
// nome[0] = 'R';
// console.log(nome[0], nome); //? o valor não foi alterado

// let a = 'A';
// let b = a; //? cópia
// console.log(a, b);
// a = 'Outra coisa';
// console.log(a, b);

//* Referência (mutáveis) - array, object, function (Passados por referência)
// let a = [1, 2, 3];
// let b = a;
// let b = [...a]; //? copia com o spread operator
// let c = b;

// console.log(a, b);
// a.push(4);
// console.log(a, b);
// b.pop();
// console.log(a, b);
// a.push('Luiz');
// console.log(a, c);

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio',
};
const b = a;
// const b = { ...a }; //? copia com o spread operator
a.nome = 'João';
console.log(a);
console.log(b);

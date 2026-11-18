// Aula 08 - Diferença entre var e let

//* O ECMAScript 2015 (ES6) corrigiu o problema de redeclaração de variáveis com mesmo nome
// var nome = 'Luiz';
// var nome = 'Otávio';
// nome = 'Luiz'; //! Não faça isso, pois vai gerar uma variável global que pode interferir em outras

let nome = 'Luiz';
// let nome = 'Luiz'; //!erro

console.log(nome);

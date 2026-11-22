// Aula 02 - Operadores Lógicos

/*
 * Operadores lógicos
 * && - AND - E  - Todas as expressões precisam ser verdadeiras para retornar true
 * || - OR - OU
 * ! - NOT - NÃO
 */

// console.log(true && true); //? true
// console.log(true && true && true && true); //? true
// console.log(true && true && false && true); //? false

// const expressao = true && true && false && true;
// console.log(true && true && true && true);
// const expressao = true || false; //? true
// const expressao = false || true; //? true
// const expressao = false || false; //? false
// const expressao = false || false || true || false; //? true
// const expressao = false || false || false || false; //? false
// const expressao = false || false || false || false; //? false
// console.log(expressao);

// const usuario = 'Luiz'; //? usuário digitou no form
// const senha = '123456'; //? usuário digitou no form
// const vaiLogar = usuario === 'Luiz';
// const vaiLogar = usuario === 'Luiz' && senha === '123456'; //? loga
// const vaiLogar = usuario === 'Luiz' && senha === '123456'; //? não loga
// console.log(vaiLogar);

// console.log(!false); //? true
// console.log(!true); //? false
console.log(!!true); //? retorna para o valor original true

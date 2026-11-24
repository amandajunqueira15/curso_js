// Aula 04 - If, else if e else

/*
 * Entre 0 e 11 - Bom dia
 * Entre 1 e 17 - Boa tarde
 * Entre 18 e 23 - Boa noite
 */

//* If pode ser usado sozinho
//* Else sempre precisa de um if
//* Pode existir vários else ifs na condição
//* Só pode existir um else na condição
//* Pode ser utilizado apenas if else

// const hora = 10;
// const hora = 13;
// const hora = 55;

// if (hora < 12) {
//   console.log('Bom dia!');
// }

// if (hora <= 12) {
//   console.log('Bom dia!');
// }

// if (hora >= 0 && hora <= 11) {
//   console.log('Bom dia');
// } else if (hora >= 12 && hora <= 17) {
//   console.log('Boa tarde');
// } else if (hora >= 18 && hora <= 23) {
//   console.log('Boa noite');
// } else {
//   console.log('Olá');
// }

// const tenhoDinheiro = true;
const tenhoDinheiro = NaN;

if (tenhoDinheiro) {
  console.log('Vou sair de casa');
} else {
  console.log('Não vou sair de casa');
}

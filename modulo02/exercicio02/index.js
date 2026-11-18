/*
 ? Luiz Otávio Miranda tem 30 anos, pesa 84kg
 ? tem 1.8 de altura e seu IMC é de 25.925925925925924
 ? Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let indiceMassaCorporal = peso / (altura * altura); //* peso / (altura * altura)
let anoNascimento = 2026 - idade;

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
// console.log('tem', altura, 'de altura e seu IMC é de', indiceMassaCorporal);
// console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
// console.log('tem ' + altura + ' de altura e seu IMC é de ' + indiceMassaCorporal);
// console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento);

//* Template Strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);

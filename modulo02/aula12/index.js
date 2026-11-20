// Aula 12 - Mais sobre strings

//* Strings são indexadas (cada string tem um índice, iniciando em 0)
// let umaString = "Um \"texto\""; // ? exibe as aspas duplas
// let umaString = 'Um \\texto'; // ? exibe uma barra invertida
// let umaString = 'Um "texto"';
// let umaString = 'Um texto';

// console.log(umaString);
// console.log(umaString[4]); // ? exibe o caracter da quarta posição
// console.log(umaString.charAt(6)); // ? exibe o caracter da sexta posição
// console.log(umaString.concat(' em', ' um', ' lindo dia.'));
// console.log(umaString + ' em um lindo dia.');
// console.log(`${umaString} em um lindo dia.`);

// console.log(umaString.indexOf('texto')); //? exibe o índice de onde começa a string ou caracter
// console.log(umaString.indexOf('Um', 3)); //? exibe -1 porque a verificação começa da posição 3 e a parte da string está antes
// console.log(umaString.indexOf('o', 3)); //? exibe o índice do caracter começando da posição 3

// console.log(umaString.lastIndexOf('o')); //? exibe o índice da primeira ocorrência do caracter de trás pra frente

//? exibe -1 porque não encontra a última ocorrência já que começa de trás pra frente
// console.log(umaString.lastIndexOf('o'));

// console.log(umaString.match(/[a-z]/g)); //? retorna todas as letras minúsculas

//? Procura por uma expressão regular (RegEx) e retorna a posição da primeira ocorrência, ou -1 se não encontrar
// console.log(umaString.search(/[a-z]/));
// console.log(umaString.search(/[x]/));

// let umaString = 'O rato roeu a roupa do rei de roma.';

//? substitui uma string ou caracter por outro
// console.log(umaString.replace('Um', 'Outra'));
// console.log(umaString.replace(/Um/, 'Outra'));
// console.log(umaString.replace(/r/g, '#')); //? com g substitui de todas as ocorrências

// let umaString = 'O rato roeu a roupa do rei de roma.';
// let umaString = 'O rato roe';
// console.log(umaString.length); //? exibe o tamanho da string

let umaString = 'O rato roeu a roupa do rei de roma.';
// console.log(umaString.slice(2, 5)); //? fatia a string iniciando na posição 2 e terminando na posição 5
// console.log(umaString.slice(-3));
// console.log(umaString.length - 3);
// console.log(umaString.slice(-3));
// console.log(umaString.slice(32));
// console.log(umaString.slice(-5, umaString.length - 1)); //? Extrai e exibe "roma" (os últimos 5 caracteres, excluindo o ponto final)
// console.log(umaString.slice(-5, -1)); //? Extrai e exibe "roma" (os últimos 5 caracteres, excluindo o ponto final)

//? // Extrai e exibe "roma" usando substring (que não aceita índices negativos como o slice)
// console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

//? divide uma string
// console.log(umaString.split(' ')); //? divide no espaço
// console.log(umaString.split('r')); //? divide no r
// console.log(umaString.split(' ', 2)); //? divide no espaço apenas 2 vezes

// console.log(umaString.toUpperCase()); //? transforma a string toda em maiúscula
console.log(umaString.toLowerCase()); //? transforma a string toda em minúscula

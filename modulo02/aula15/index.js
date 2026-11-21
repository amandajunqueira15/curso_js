// Aula 15 - Arrays Básico

// const alunos = 'Luiz Maria João'; //? variável simples
// const alunos = ['Luiz', 'Maria', 'João', 1, true, null]; //? array
// console.log(alunos);

// const nome = 'Luiz Otávio'; //? strings são indexadas
// console.log(nome[10]); //? 'o'

const alunos = ['Luiz', 'Maria', 'João']; //? arrays são indexados
// console.log(alunos); //? exibe todos os índices do array
// console.log(alunos[0]); //? exibe o índice 0 'Luiz'
// console.log(alunos[2]); //? exibe o índice 2 'João'
// alunos[0] = 'Eduardo'; //? edita o índice 0
// alunos[3] = 'Luiza'; //? adiciona um novo índice ao final do array com o valor 'Luiza'
// console.log(alunos);

// console.log(alunos.length); //? exibe o tamanho do array
// alunos[alunos.length] = 'Luiza'; //? dentro de [] é passado o tamanho do array, então é o mesmo que fazer alunos[3]
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos.push('Luiza'); //? adiciona um novo índice ao final do array com o valor 'Luiza', sem precisar saber o tamanho
// alunos.push('Fábio');
// alunos.push('Luana');

// alunos.unshift('Luiza'); //? adiciona um novo índice no começo do array com o valor 'Luiza', sem precisar saber o tamanho
// alunos.unshift('Fábio');

// alunos.pop(); //? remove o último índice do array
// alunos.shift(); //? remove o primeiro índice do array

// const removido = alunos.pop(); //? salva o que foi removido em uma variável
// const removido = alunos.shift();
// console.log(removido);

// delete alunos[1]; //? remove apenas o conteúdo do índice 1 do array, mas a posição continua
// console.log(alunos[1]); //? undefined

// console.log(alunos[50]); //? undefined

// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos[4]); //? pega o índice 4 do array
// console.log(alunos.slice(0, 3)); //? fatia o array e pega do índice 0 até o índice 3
// console.log(alunos.slice(0, -1)); //? fatia o array e pega do índice 0 até o índice 4

console.log(typeof alunos); //? retorna o tipo de array que é Object
console.log(alunos instanceof Array); //? exibe true se o array alunos for uma instância de Array
console.log(alunos);

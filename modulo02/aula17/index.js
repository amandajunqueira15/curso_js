// Aula 17 - Objetos

// const array = [1, 2, 3];
// array.push(4);
// array[0] = 'Luiz';
// array = 'Outra'; //!erro
// console.log(array);

// const nome01 = 'Luiz';
// const sobrenome01 = 'Miranda';
// const idade01 = 25;

// const nome02 = 'Maria';
// const sobrenome02 = 'Oliveira';
// const idade02 = 55;

//* Objeto Literal
// const pessoa1 = {
//   nome: 'Luiz',
//   sobrenome: 'Miranda',
//   idade: 25,
// };

// const pessoa2 = {
//   nome: 'Maria',
//   sobrenome: 'Oliveira',
//   idade: 55,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

//? argumento é o valor que é passado para o parâmetro

//* Função Factory (fábrica de objetos)
// function criaPessoa(nome, sobrenome, idade) {
//   return {
// nome: nome,
// sobrenome: sobrenome,
// idade: idade,
//     nome,
//     sobrenome,
//     idade,
//   };
// }

// const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
// const pessoa3 = criaPessoa('João', 'Moreira', 32);
// const pessoa4 = criaPessoa('Junior', 'Silva', 37);
// const pessoa5 = criaPessoa('Jean', 'Souza', 22);

// console.log(pessoa1.nome, pessoa2.nome);
// console.log(pessoa1.nome, pessoa1.sobrenome);

const pessoa1 = {
  //? Atributos do objeto
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25,

  //? Método do objeto
  fala() {
    // console.log('Olá mundo!');
    // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    console.log(`A minha idade atual é ${this.idade}.`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

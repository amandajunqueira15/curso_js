//? O JS segue o padão IEEE 754-2008 para precisão de números
// let num1 = 1; //* number
// let num1 = 1500; //* number
// let num1 = 10.5789551255547; //* number
// let num1 = 10; //* number
// let num1 = 10.25; //* number
// let num2 = 2.5; //* number
let num1 = 0.7; //* number
let num2 = 0.1; //* number

// console.log(num1.toString() + num2); //? converte temporariamente num1 para string e concatena
// num1 = num1.toString(); //? converte totalmente para string
// console.log(typeof num1); //? num1 continua sendo number

// console.log(num1.toString(2)); //? exibe a representação binária

// console.log(num1.toFixed(2)); //? define a quantidade de casas decimais para 2 depois da vírgula
// console.log(num1.toFixed(4)); //? define a quantidade de casas decimais para 4 depois da vírgula

// console.log(Number.isInteger(num1)); //? verifica se o valor é inteiro ou não (retorna true ou false)

// let temp = num1 * 'Ola'; //? true pois não é um número
// let temp = num1 * '5'; //? false pois é um número (o js converte para fazer a multiplicação)
// let temp = num1 + '5'; //? false pois não é um número (nesse caso foi concatenada a saída)
// console.log(Number.isNaN(temp)); //? verifica se o valor não é um número

// console.log(num1 + num2); //? 0.7999999999999999
// num1 += num2; //? 0.8
// num1 += num2; //? 0.9
// num1 += num2; //? 1.0
num1 = (num1 * 100 + num2 * 100) / 100; // ? 0.8
num1 = (num1 * 100 + num2 * 100) / 100; //? 0.9
num1 = (num1 * 100 + num2 * 100) / 100; //? 1

// num1 = num1.toFixed(2);
num1 = parseFloat(num1.toFixed(2));

console.log(num1);
// console.log(Number.isInteger(1.0));
console.log(Number.isInteger(num1));

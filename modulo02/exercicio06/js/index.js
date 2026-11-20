const numero = Number(prompt('Digite um número:'));

// document.body.innerHTML = `
//     <h1>Seu número é ${numero}</h1>
//     <p>Raiz Quadrada: ${Math.sqrt(numero)}</p>
//     <p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
//     <p>É NaN: ${Number.isNaN(numero)}</p>
//     <p>Arredondando para baixo: ${Math.floor(numero)}</p>
//     <p>Arredondando para cima: ${Math.ceil(numero)}</p>
//     <p>Com duas casas decimais: ${numero.toFixed(2)}</p>
// `;

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz Quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

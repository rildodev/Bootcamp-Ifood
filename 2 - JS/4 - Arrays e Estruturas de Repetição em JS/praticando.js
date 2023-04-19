const valor = 5;

for (let i = 0; i < 10; i++) {
  console.log(valor + " x " + i + " = " + valor * i);
}

/* exercicio 2 */

const numeros = [10, 20, 3, 4, 5, 7, 99, 6, 2, 1, 1569, 222, 43];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    console.log(numeros[i]);
  }
}

const numerosPares = [];
for (let i = 0; i < 10; i++) {
  const numeroPar = i % 2 === 0;
  if (numeroPar) {
    numerosPares.push(i);
  }
}

console.log(numerosPares);

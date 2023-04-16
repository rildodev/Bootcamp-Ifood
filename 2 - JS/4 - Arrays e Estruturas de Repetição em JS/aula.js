/* LISTAS - ARRAYS */

const alunos = ["joão", "marina", "athos"];

console.log(alunos[1]);

/* adicionar elemento no array */

alunos.push("Sansão");

console.log(alunos[3]);

alunos[4] = "isabela";
console.log(alunos[4]);

/* REMOVER O ÚLTIMO ITEM DA LISTA */

alunos.pop();
console.log(alunos); //joão, marina, athos, sansão

/* REMOVER O PRIMEIRO ITEM DA LISTA */

alunos.shift();
console.log(alunos); // marina, athos, sansão

/* SABER O TAMANHO DA LISTA */

console.log(alunos.length);

/* PERCORRER UMA LISTA - ARRAY */

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i]);
}

/* Exemplo - Média de alunos */

const notas = [];

notas.push(10);
notas.push(7);
notas.push(6);

let soma = 0;
for (let x = 0; x < notas.length; x++) {
  const nota = notas[x];
  soma += nota;
}

console.log(soma / notas.length);

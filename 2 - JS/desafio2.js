const nota1 = 4;
const nota2 = 4;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log("reprovado!");
} else if (media < 7) {
  console.log("Recuperação");
} else {
  console.log("Aprovado!");
}

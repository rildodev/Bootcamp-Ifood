const peso = 100;
const altura = 1.9;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Acima do peso");
} else if (imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Mórbida");
}

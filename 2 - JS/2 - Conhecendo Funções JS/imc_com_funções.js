function calcularIMC(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Acima do peso";
  } else if (imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade Mórbida";
  }
}

function main() {
  const peso = 100;
  const altura = 1.9;

  const imc = calcularIMC(peso, altura);
  console.log(classificarIMC(imc));
}

main();

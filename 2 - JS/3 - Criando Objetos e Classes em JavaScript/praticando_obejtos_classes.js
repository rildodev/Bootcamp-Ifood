/* class Carros {
  marca;
  cor;
  consumoMedioPorKm;

  constructor(marca, cor, consumoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.consumoMedioPorKm = consumoMedioPorKm;
  }

  calcularCustoVIagem(distanciaKm, preco) {
    return distanciaKm * this.consumoMedioPorKm * preco;
  }
}

const uno = new Carros("Fiat", "Branco", 1 / 12);

const custo = uno.calcularCustoVIagem(320, 5.3);

console.log("Custo da viagem é de R$ " + custo.toFixed(2) + " reais");
 */

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  checarIMC() {
    return this.peso / Math.pow(this.altura, 2);
  }

  classificarIMC() {
    const imc = this.checarIMC();

    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Excesso de peso";
    } else if (imc < 35) {
      return "Obesidade I";
    } else if (imc < 39.9) {
      return "Obesidade II";
    } else {
      return "Obesidade Mórbida";
    }
  }
}

const paciente1 = new Pessoa("José", 70, 1.75);

console.log(paciente1.checarIMC())
console.log(paciente1.classificarIMC())
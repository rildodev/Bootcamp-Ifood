function sayMyName(name) {
  return "Srº " + name;
}

/* sayMyName("Rildo"); */

/* -------------------- */

/* Checar se é +18 */

function checarMaiorIdade(idade) {
  if (idade >= 18) {
    /* console.log(sayMyName("Rildo") + " vc é maior de idade"); */
  } else {
    /* console.log("menor de idade"); */
  }
}

checarMaiorIdade(18);

/* ------------------------------------- */

function aplicarDesconto(valor, desconto) {
  return valor - (valor * desconto) / 100;
}

function aplicarJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

function meioDePagamento(forma) {
  if (forma == "d") {
    console.log(
      "Valor do produto com 10% de desconto: R$ ",
      aplicarDesconto(valorProduto, 10)
    );
  } else if (forma == "p") {
    console.log(
      "Valor do produto com 15% de desconto: R$ " +
        aplicarDesconto(valorProduto, 15)
    );
  } else if (forma == "2x") {
    console.log("valor do produto sem desconto: R$ ", valorProduto);
  } else {
    console.log(
      "Valor do produto com 10% de acréscimo: R$ " +
        aplicarJuros(valorProduto, 10)
    );
  }
}

const valorProduto = 100;
const formaDePagamento = meioDePagamento("3x");

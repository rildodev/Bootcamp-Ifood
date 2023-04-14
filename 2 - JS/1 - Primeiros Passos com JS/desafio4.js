const valorProduto = 1000;
const meioDePagamento = "p";

console.log("Valor do produto: R$ ", valorProduto.toFixed(2));

if (meioDePagamento == "d") {
  const aVistaDebito = valorProduto - valorProduto * 0.1;
  console.log(
    "Valor do produto com 10% de desconto: R$ ",
    aVistaDebito.toFixed(2)
  );
} else if (meioDePagamento == "p") {
  const aVistaDinheiroPix = valorProduto - valorProduto * 0.15;
  console.log(
    "Valor do produto com 15% de desconto: R$ ",
    aVistaDinheiroPix.toFixed(2)
  );
} else if (meioDePagamento == "2x") {
  const duasVezes = valorProduto;
  console.log("valor do produto sem desconto: R$ ", duasVezes.toFixed(2));
} else {
  const acimaDeDuasVezes = valorProduto + valorProduto * 0.1;
  console.log(
    "Valor do produto com 10% de desconto: R$ ",
    acimaDeDuasVezes.toFixed(2)
  );
}

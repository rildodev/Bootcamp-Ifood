const precoEtanol = 3.5;
const precoGasolina = 5.9;

const tipoComsbustivel = "e";

const consumeMedioCarro = 12;
const distanciaViagem = 300;

const custoDaViagem = distanciaViagem / consumeMedioCarro;

if (tipoComsbustivel == "g") {
  let custo = custoDaViagem * precoGasolina;
  console.log("O custo da viagem será de R$ ", custo.toFixed(2), " reais");
} else {
  let custo = custoDaViagem * precoEtanol;
  console.log("O custo da viagem será de R$ ", custo.toFixed(2), " reais");
}

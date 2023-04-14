/* FUNÇÃO SIMPLES */
function teste() {
  console.log("teste");
}

teste();

/* ---------------------- */

/* FUNÇÃO COM PARÂMETRO */
function sayMyName(name) {
  console.log("Your name is " + name);
}

sayMyName("Rildo");

/* --------------------------- */

/* FUNÇÃO COM RETORNO */
function quadrado(valor) {
  return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

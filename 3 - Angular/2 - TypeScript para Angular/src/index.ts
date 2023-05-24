type heroi = {
  name: string;
  vulgo: string;
};

function printaObjPessoa(pessoa: heroi) {
  console.log(pessoa);
}

printaObjPessoa({
  name: "Bruce Wayne",
  vulgo: "Batman",
});

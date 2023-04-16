/* OBJETOS */

const usuario = {
  nome: "Rildo",
  idade: 32,
  altura: 1.9,
  profissao: "Professor",
  descreverUsuario: function () {
    console.log(`O nome do usuário é ${this.nome}, e tem ${this.idade} anos`);
  },
};

/* implementando atributo ao objeto */
usuario.sexo = "m";

/* removendo atributo do objeto */
delete usuario.altura;

/* acessando os valores do obejto de forma simples */
console.log(usuario.nome);

usuario.descreverUsuario();

/* acessando os valore do objeto através de uma sintaxe mais dinâmica */
const atributo = "profissao";
console.log(usuario[atributo]);

/* CLASSES */

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`O nome do usuário é ${this.nome}, e tem ${this.idade} anos`);
  }
}

/* instancioando um objeto da classe */
const cliente = new Pessoa("Rildo", 32);

cliente.descrever();
console.log(cliente);

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velha que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velha que ${p1.nome}`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade `);
  }
}

const rildo = new Pessoa("Rildo", 4);
const athos = new Pessoa("Athos", 4);

compararPessoas(rildo, athos);

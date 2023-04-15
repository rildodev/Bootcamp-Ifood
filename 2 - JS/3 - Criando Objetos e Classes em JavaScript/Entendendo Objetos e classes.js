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

  descrever() {
    console.log(`O nome do usuário é ${this.nome}, e tem ${this.idade} anos`);
  }
}

/* instancioando um objeto da classe */
const cliente = new Pessoa();
cliente.nome = "Athos";
cliente.idade = 4;

console.log(cliente);

cliente.descrever();

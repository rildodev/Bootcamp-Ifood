/*
Variáveis 
 */

//Tipos Primitivos: boolen, number, string
let ligado: boolean = false;
let nome: string = "Rildo";
let number: number = 30;

//Tipos Especiais: null, undefined
let nulo: null = null;

let indefino: undefined = undefined;

//Tipos Abrangentes: any, void
let qualquerCoisa: any = "Rildo" || 30 || true || undefined;

let retorn: void;

//Objeto sem previsibilidade
let produto: object = { name: "Iphone", valor: 3400 };

//Objeto shaped
type ProdutoLoja = {
  nome: string;
  price: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Iphone",
  price: 2000,
  unidades: 89,
};

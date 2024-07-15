console.log(`\n Trabalhando com loops`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let destinoExiste = false;

for (let cont = 0; cont < 3; cont++) {
  if (listaDeDestinos[cont] == destino) {
    destinoExiste = true;
    break;
  }
}

console.log("destino existe", destinoExiste);

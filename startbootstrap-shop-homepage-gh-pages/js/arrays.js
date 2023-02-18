class Neumaticos {
  constructor({ marca, medidas, precio, }) {
    this.marca = marca;
    this.medidas = medidas;
    this.precio = precio;
  }
}

const NeumaticosSport = new Neumaticos({
  marca: "good year",
  medidas: "215-60-R16",
  precio: "iva incluido $ 40.000"

});

const NeumaticosMixtos = new Neumaticos({
  marca: "fate",
  medidas: "165-70-R14",
  precio: "iva incluido $30.000"

});

const NeumaticosNormales = new Neumaticos({
  marca: "firestone",
  medidas: "170-65-R14",
  precio: " iva incluido $25.000"
});
const neumaticosTacos = {
  ...NeumaticosMixtos,
  marca: "michelin"
}
const neumaticosPerfilBajo = {
  ...NeumaticosSport,
  marca: "Hankook"
}

console.log(NeumaticosSport);
console.log(NeumaticosMixtos);
console.log(NeumaticosNormales);

let NeumaticosEconomicos = ["falken", "devica",];
NeumaticosEconomicos.push("lanvigator", "egommerce", "kormoran");
console.log(NeumaticosEconomicos);

let NeumaticosUltimasUnidadesFabricadas = ["traxmax", "orium", "uniroyal"];
NeumaticosUltimasUnidadesFabricadas.pop();
console.log(NeumaticosUltimasUnidadesFabricadas);

const ventaHastaAgotarStoc = NeumaticosEconomicos.concat(NeumaticosUltimasUnidadesFabricadas);
console.log(ventaHastaAgotarStoc);


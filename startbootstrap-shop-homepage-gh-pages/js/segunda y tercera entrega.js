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

const ultimosNeumaticosEnVenta = [
  {
    marca: "falken",
    medidas: "170-75-16",
    precio: " oferta sin iva $ 8.000"
  },
  {
    marca: "orium",
    medidas: "140-64-14",
    precio: " oferta sin iva $ 9.000"
  },
  {
    marca: "traxmax",
    medidas: "150-75-14",
    precio: " oferta sin iva $9.000"
  },
  {
    marca: "kormoran",
    medidas: "150-60-14",
    precio: " oferta sin iva $8.000 "
  },
];
localStorage.setItem("marcasDiscontinuas", JSON.stringify(ultimosNeumaticosEnVenta));
const UltimosNeumaticosGuardadosEnLe = localStorage.getItem("marcasDiscontinuas");
 JSON.parse(UltimosNeumaticosGuardadosEnLe); 
const listado = document.createElement("p");
for (const marcas of ultimosNeumaticosEnVenta) {
  const p = document.createElement("p");
  p.innerHTML = `${marcas.marca}`;
  listado.append(p);
}
document.querySelector("#pocotiempo").append(listado);
const formulario = document.getElementById("formulario");
let boton = document.get

 formulario.addEventListener("submit", (e) => {
 e.preventDefault();
 const ingresoFormulario = {
 nombre: e.target[0].value,
 email: e.target[1].value,
}
for(const input of e.target) {
  input.value = "";
}
localStorage.setItem("datos usuario", JSON.stringify(ingresoFormulario));
boton = document.getElementById("boton");
boton.addEventListener("click", () => {
});
});


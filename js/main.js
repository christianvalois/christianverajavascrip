
function pedirNombreYsaludar() {
  const nombre = prompt("ingrese su nombre");
  alert("bienvenido" + " " + nombre);
}
pedirNombreYsaludar();
const autos = prompt ("ingresa la marca de tu auto");
const modelo = prompt ("ingresa el modelo");
alert("para el modelo de tu auto" + " " + autos + " " + modelo + " " + "tenemos dos modelos de llantas, racing y sport en 16 y 17'");

const diametro = prompt("Ingresar pulgadas");
const diametroParseada = parseInt(diametro);
if (diametroParseada > 15 && diametroParseada < 17) {
  alert("este es el modelo racing y su precio es de $ 30000");
} else if (diametroParseada === 17) {
  alert("este es el modelo sport y su precio es de $ 25000");
} else if (diametroParseada > 17 || 1) {
  alert("Entrada invalida")
}
for (let i = 1; i <= 2; i++) {
  alert(" Los Precios que se Muestran Son Sin IVA ")
  alert(" Si lo Desea Use Nuestro Simulador Para Calcular El IVA ");
break;
}
const IVA = 21;

const calcularIva = (precio) => {
  const resultado = precio + (precio * IVA / 100);
  return resultado;
}
let precioProducto;
do {
  precioProducto = prompt('Calcule el IVA del Producto Elegido, Caso Contrario Presione FIN');
  const precioProductoParseado = parseFloat(precioProducto);
  if (precioProductoParseado > 0) {
    alert('Precio con iva (' + IVA + '%): ' + calcularIva(precioProductoParseado));
  }
} while (precioProducto != 'FIN');

class Neumaticos {
  constructor({marca, medidas, precio,}) {
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

console.log(NeumaticosSport);
console.log(NeumaticosMixtos);
console.log(NeumaticosNormales);

let NeumaticosEconomicos = ["falken", "devica",];
NeumaticosEconomicos.push("lanvigator","egommerce","kormoran");
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
  medidas: "uniroyal",
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
]
ultimosNeumaticosEnVenta.forEach((marcasEnRemate) => {
console.log(marcasEnRemate.marca);
}
) 
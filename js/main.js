
const autos = prompt ("ingresa la marca de tu auto");
const modelo = prompt ("ingresa el modelo");
alert("para el modelo de tu auto" + " " + autos + " " + modelo + " " + "tenemos dos modelos racing y sport en 16 y 17'");

const diametro = prompt("Ingresar pulgadas");
const diametroParseada = parseInt(diametro);
if (diametroParseada > 15 && diametroParseada < 17) {
  alert("este es el modelo racing y su precio es de $ 30000");
} else if (diametroParseada === 17) {
  alert("este es el modelo sport y su precio es de $ 25000");
} else if (diametroParseada > 17) {
  alert("Entrada invalida")
}
for (let i = 1; i <= 1; i++) {
    alert("para mas informacion llame al numero de contacto gracias");
}
for (let i = 1; i <=1; i++) {
  alert("para una nueva busqueda recargar la pagina");
}
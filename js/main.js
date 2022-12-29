let listaDenombres = "";
let nombreIngresado = prompt("ingrese un nombre, para terminar ingrese BASTA");
while (nombreIngresado !== "BASTA") {
  listaDenombres = listaDenombres + "\n" + nombreIngresado;
  nombreIngresado = prompt("ingrese un nombre, para terminar ingrese BASTA");

}
alert("la lista de nombres ingresados es: " + listaDenombres);
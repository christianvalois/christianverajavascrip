/* function pedirNombreYsaludar() {
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
    alert("Si lo Desea Use Nuestro Simulador Para Calcular El IVA");
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
  } while (precioProducto != 'FIN'); */
  
  
 
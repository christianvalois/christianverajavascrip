/* let listaDenombres = "";
let nombreIngresado = prompt("ingrese un nombre, para terminar ingrese BASTA");
while (nombreIngresado !== "BASTA") {
  listaDenombres = listaDenombres + "\n" + nombreIngresado;
  nombreIngresado = prompt("ingrese un nombre, para terminar ingrese BASTA");

}
alert("la lista de nombres ingresados es: " + listaDenombres); 


 class Actor {
  constructor({nombre,apellido,edad }) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
 }
 saludar() {
  return "hola, soy " + this.nombre;
 }
}
const actor1 = new Actor({
  nombre: "christian",
  apellido: "vera",
  edad: 48
}) */

 
// Creamos una clase Golondrina
// Esta clase representara una golondrina con su
// energia y 2 metodos: come y vola.
// Metodo come: suma 10 de energia.
// Metodo vola: consume 2 de energia por cada kilometro recorrido.
/* class Golondrina {
  constructor(nombre, energiaMaxima) {
    this.nombre = nombre;
    this.energiaMaxima = parseInt(energiaMaxima);
    this.energia = parseInt(energiaMaxima);
  }

  vola(distanciaEnKms) {
    const energiaAGastar = distanciaEnKms * 2;

    if (this.energia < energiaAGastar) {
      alert(this.nombre + ': Estoy muy cansada para volar esa distancia :(');
    } else {
      this.energia = this.energia - energiaAGastar;
      alert(this.nombre + ': vole ' + distanciaEnKms + ' Kms y me queda ' + this.energia + ' de energia');
    }
  }

  come() {
    const nuevaEnergia = this.energia + 10;
    if (nuevaEnergia > this.energiaMaxima) {
      alert(this.nombre + 'No puedo comer mas, estoy satisfecha :(');
    } else {
      this.energia = nuevaEnergia;
      alert(this.nombre + ': Estaba muy rico :D, ahora mi energia es de ' + this.energia);
    }
  }
}

alert('Bienvenido al simulador de golondrnas');

const nombre = prompt('Ingrese el nombre de su golondrina');
const energiaMaxima = prompt('Ingrese la energía máxima de su golondrina');

const golondrina = new Golondrina(nombre, energiaMaxima);

let opcion;
do {
  opcion = prompt('Seleccione una opcion:\n1 - volar\n2 - comer\n0 - Finalizar');
  switch (opcion) {
    case '1':
      const distancia = parseInt(prompt('Indique la distancia a volar en Kms'));
      golondrina.vola(distancia);
      break;
    case '2':
      golondrina.come();
      break;
  }
  console.log(opcion)
} while (opcion !== '0'); */
/* 
let producto;
do{
  producto = prompt("Ingrese un producto")
}
 */

const avengers = [
  {
    alias: 'Thor',
    nombre: 'Thor',
    ordenDeAfilicacion: 3,
    tipo: 'Dios',
    fuerza: 1000
  },
  {
    alias: 'Captain America',
    nombre: 'Steve Rogers',
    ordenDeAfilicacion: 1,
    tipo: 'Humano',
    fuerza: 100
  },
  {
    alias: 'Iron Man',
    nombre: 'Tony Stark',
    ordenDeAfilicacion: 2,
    tipo: 'Humano',
    fuerza: 10
  },
  {
    alias: 'Hulk',
    nombre: 'Bruce Banner',
    ordenDeAfilicacion: 4,
    tipo: 'Hulk',
    fuerza: 10000
  },
  {
    alias: 'Vision',
    nombre: 'Vision',
    ordenDeAfilicacion: 7,
    tipo: 'Robot',
    fuerza: 5000
  },
];
/* avengers.forEach((avenger) => {
  console.log(avenger.nombre);
}); */

/* const encontrado = avengers.find((avenger) => {
  return avenger.alias === "Vision";
});
console.log(encontrado);

const filtrado = avengers.filter((heroes) => heroes.tipo === "Humano");

console.log(filtrado); */

console.log(math.ceil(math.random() * 6));

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Acceder a nodos</title>
  <link rel="stylesheet" href="./styles/styles.css">
</head>
<body>
  <div id="container-avengers">
    <h1 id="avengers-titulo">Avengers</h1>
    <div id="avengers-subtitulo"></div>
    <ul>
      <li class="avenger">Captain America</li>
      <li class="avenger">Iron Man</li>
      <li class="avenger">Thor</li>
      <li class="avenger">Hulk</li>
    </ul>
  </div>
  <div>
    <h1>Lista del Super</h1>
    <ul>
      <li>Leche</li>
      <li>Pan</li>
      <li>Helado</li>
      <li>Gaseosa</li>
    </ul>
  </div>
  <div>
    <h1>Color Aleatorio</h1>
    <div id="color-aleatorio" class="rojo"></div>
  </div>
  <script src="./js/main.js"></script>
</body>
</html>
.rojo {
  background-color: red;
}

.amarillo {
  background-color: yellow;
}

.azul {
  background-color: blue;
}

#color-aleatorio {
  width: 100px;
  height: 100px;
}
`´´
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Query Selector</title>
</head>
<body>
  <div id="contenedor">
    <h1>Lista de heroes</h1>
    <p class="texto"><strong>Heroes de DC</strong></p>
    <ul>
      <li class="heroe">Batman</li>
      <li class="heroe">Superman</li>
      <li class="heroe">Wonder Woman</li>
    </ul>
  </div>
  <form>
    <input class="radio" type="radio" id="DC" name="empresa-comics" value="DC">
    <label for="DC">DC</label><br>
    <input class="radio" type="radio" id="Marvel" name="empresa-comics" value="Marvel" checked="checked">
    <label for="Marvel">Marvel</label><br>
  </form>
  <script src="./js/main.js"></script>
</body>
</html>




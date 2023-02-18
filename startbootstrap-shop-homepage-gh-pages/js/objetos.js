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
  
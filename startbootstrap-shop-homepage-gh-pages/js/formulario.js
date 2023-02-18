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
const formBoton = document.getElementById("boton");
formBoton.addEventListener("click", ()=> {
Swal.fire({
  title: "Logrado",
  text: "Te Enviaremos Las Ofertas!!!!",
  confirmButtonText: "cerrar",
});
}
);
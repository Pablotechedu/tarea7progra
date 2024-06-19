const persona1 = {
  nombre: "Luis",
};
const persona2 = {
  nombre: "David",
};

function presentar() {
  return `Hola mi nombre es ${this.nombre}`;
}

const presentacion = presentar.apply(persona2);
console.log(presentacion);

const persona1 = {
  nombre: "Eduardo",
};
const persona2 = {
  nombre: "Otto",
};

function saludar() {
  return `Hola mi nombre es ${this.nombre}`;
}

const saludo = saludar.call(persona2);

console.log(saludo);

function saludar(nombre, apellido) {
  return `¡Hola, ${nombre} ${apellido}! `;
}

const persona = {
  nombre: "Pablo",
  apellido: "Aguilar",
};

const saludo = saludar.call(persona, persona.nombre, persona.apellido);

console.log(saludo);

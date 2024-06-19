const libro = {
  titulo: "El Quijote",
  autor: "Miguel De Cervantes",
};

function agregarCapitulos(capitulos) {
  this.capitulos = capitulos;
}

const capitulos = [
  "Capítulo 1: En un lugar de la Mancha",
  "Capítulo 2: De los molinos de viento",
];

agregarCapitulos.apply(libro, [capitulos]);
console.log(libro);

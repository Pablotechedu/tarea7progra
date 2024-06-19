const auto = {
  marca: "Honda",
  mostrarmarca: function () {
    return `La marca del auto es ${this.marca}`;
  },
};

const moto = {
  marca: "Kawasaki",
};

const mensaje = auto.mostrarmarca.call(moto);

console.log(mensaje);

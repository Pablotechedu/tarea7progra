cuentaBancaria = {
  titular: "Alejandro Cardona ",
  saldo: 5000,
};

function actualizarSaldo(monto) {
  this.saldo += monto;
}

function ingresoSaldo() {
  let valor;
  while (true) {
    valor = prompt("Por favor, ingrese un monto");
    const numero = Number(valor);
    if (!isNaN(numero)) {
      return numero;
    } else {
      alert("Ingrese un valor en números");
    }
  }
}

const monto = ingresoSaldo();

actualizarSaldo.apply(cuentaBancaria, [monto]);

console.log(cuentaBancaria);
alert(`Su nuevo saldo es ${cuentaBancaria.saldo}`);

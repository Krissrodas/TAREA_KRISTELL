let precios = [10, 20, 5, 15];
let pago = 60;
let total = 0;

for (let i = 0; i < precios.length; i++) {
  total = total + precios[i];
}

let cambio = pago - total;

console.log("Total:", total);
console.log("Cambio:", cambio);


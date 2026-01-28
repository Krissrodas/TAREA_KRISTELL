let stock = [5, 10, 3];
let venta = 4;

if (venta < stock[0]) {
  stock[0] = stock[0] - venta;
}

console.log("Stock restante:", stock[0]);


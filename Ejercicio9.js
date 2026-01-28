/*
  RETO SPRINT – INDUSTRIAL #09

  BUGS A REPARAR:
  1) Condición incorrecta
*/

let valores = [-1, 5, -3, 8, 2];
let suma = 0;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] > 0) {
    suma += valores[i];
  }
}

console.log("Suma:", suma);

/*
  SALIDA ESPERADA:
  Suma: 15
*/

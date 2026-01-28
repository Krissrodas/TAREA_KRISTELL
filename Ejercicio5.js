/*
  RETO SPRINT – INDUSTRIAL #05

  BUGS A REPARAR:
  1) Error de variable mal escrita
  2) División incorrecta
*/

let edades = [18, 20, 22, 19];
let suma = 0;

for (let i = 0; i < edades.length; i++) {
  suma += edades[i];
}

let promedio = suma / edades.length;

console.log("Promedio:", promedio);

/*
  SALIDA ESPERADA:
  Promedio: 19.75
*/

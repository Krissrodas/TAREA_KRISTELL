/*
  RETO SPRINT – INDUSTRIAL #10

  BUGS A REPARAR:
  1) Comparación incorrecta
*/

let letras = ["a", "b", "a", "c", "a"];
let contador = 0;

for (let i = 0; i < letras.length; i++) {
  if (letras[i] == "a") {
    contador++;
  }
}

console.log("Cantidad de a:", contador);

/*
  SALIDA ESPERADA:
  Cantidad de a: 3
*/

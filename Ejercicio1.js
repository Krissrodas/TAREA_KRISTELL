var notas = [60, 70, 80, 40, 90];
var suma = 0;
var aprobados = 0;

for (var i = 0; i < notas.length; i++) {
  suma = suma + notas[i];

  if (notas[i] >= 61) {
    aprobados++;
  }
}

var promedio = suma / notas.length;

console.log("Promedio:", promedio);
console.log("Aprobados:", aprobados);

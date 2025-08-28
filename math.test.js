const { suma, resta, multiplicar } = require("./math.js");

// Pruebas
console.assert(suma(2, 3) === 5, "Error en suma(2, 3)");
console.assert(resta(5, 2) === 3, "Error en resta(5, 2)");
console.assert(multiplicar(3, 4) === 12, "Error en multiplicar(3, 4)");

console.log("✅ Todas las pruebas pasaron correctamente");
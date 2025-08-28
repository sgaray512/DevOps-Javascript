const { agregarLibro, eliminarLibro } = require("./script.js");

let libros = [];

console.assert(
  agregarLibro(libros, { titulo: "1984", autor: "Orwell" }).length === 1,
  "Error en agregarLibro"
);

libros = agregarLibro(libros, { titulo: "El Hobbit", autor: "Tolkien" });

console.assert(
  eliminarLibro(libros, "1984").length === 1,
  "Error en eliminarLibro"
);

console.log("✅ Tests de script.js pasaron correctamente");

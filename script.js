function agregarLibro(lista, libro) {
    lista.push(libro);
    return lista;
}

function eliminarLibro(lista, titulo) {
    return lista.filter(l => l.titulo !== titulo);
}

module.exports = { agregarLibro, eliminarLibro };

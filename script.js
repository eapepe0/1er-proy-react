const root = document.getElementById("root");
/* seleccionamos el id root */
ReactDOM.render(<h2>Hola , Usuario</h2>,root)
/* te permite renderizar algo que se parece a html */
/* agrega al div vacio root un h2 que dice Hola, Usuario */

ReactDOM.render(<ul><li>Item 1</li><li>Item 2</li></ul>,root)
/* sobreescribe el div root pone una lista desordenada con 2 items */

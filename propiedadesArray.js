var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
];
// filter crea un nuevo arreglo con las condiciones

let articuloFiltrado = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

console.log(articuloFiltrado);

// map ayuda a mapear los articulos
// se le pide que traiga los nombres del arreglo

let nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log("Nombre :" + nombreArticulos);

// find ayuda a buscar dentro del arreglo

let encontrarArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Audifonos";
  console.log("Find:" + encontrarArticulo);

});

// foreach para recorrer el arreglo y traer los nombres

let forArticulo = articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

//some regresa un true o un false


let someArticulo = articulos.some(function (articulo) {
    return articulo.costo <=700;
  });
  console.log(someArticulo);


  
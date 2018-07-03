// URL de la API (json)
const API = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';

// Elemento HTML donde se imprime el contenido
const sedes = document.getElementById('botones');

// Se crea una función que imprime el contenido específico que deseamos obtener
function obtenerSedes() {
  fetch(API) // Se hace la llamada a la API,
  .then( (respuesta) => respuesta.json() ) // ...entonces se obtiene una respuesta y se declara el tipo de respuesta, en este caso .json()
  .then( (datos) => { // ...entonces tranformamos la respuesta en datos.
    console.log(datos); // Log de los datos.
    let contenido = ''; // Se crea un punto de referencia en HTML.
    for ( let sede in datos ) { // Por cada objeto en los datos,
      contenido += `<a id="nav-${sede}">${sede}</a><div id="nav-${sede}-generaciones"></div>`; // ...se crea un elemento HTML con el contenido del objeto
    }
    sedes.innerHTML = contenido; // ...y se imprimen todos los elementos dentro de nuestro contenedor
  })
}
// Ejecutar la función al dar click en nuestro botón designado
document.getElementById('sedes').addEventListener('click', obtenerSedes);



// Se crea una función que imprime el contenido específico que deseamos obtener
function obtenerGeneraciones() {
  fetch(API) // Se hace la llamada a la API,
  .then( (respuesta) => respuesta.json() ) // ...entonces se obtiene una respuesta y se declara el tipo de respuesta, en este caso .json()
  .then( (datos) => { // ...entonces tranformamos la respuesta en datos.
    console.log(datos); // Log de los datos.
    let contenido = document.getElementById('nav-lima'); // Se crea un punto de referencia en HTML.
    const sedes_generaciones = document.getElementById('nav-lima-generaciones')
    for ( let object in datos ) { // Por cada objeto en los datos,
      // contenido += `<a id="nav-${objet.generacion}">${objet.generacion}</a>`; // ...se crea un elemento HTML con el contenido del objeto
      console.log(object);
      
    }
    sedes_generaciones.innerHTML = contenido; // ...y se imprimen todos los elementos dentro de nuestro contenedor
  })
}
// Ejecutar la función al dar click en nuestro botón designado
const nav_lima = document.getElementById('nav-lima')
nav_lima.addEventListener('click', obtenerGeneraciones);

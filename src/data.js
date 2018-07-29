const API = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
window.onload = () => {
  fetch(API)
  .then((response) => response.json())
  .then((datos) => {
    console.log('API: ', datos);
    renderSedes(datos);
    renderGeneraciones(datos);
    }).catch(error => {
      console.log(error);
    })
}
//Se declara una variable global que se carga al iniciar el sitio, 
window.computeGenerationsStats = (laboratoria) => {}; 

window.computeStudentsStats = (laboratoria) => {};

window.sortStudents = (laboratoria) => {};

window.filterStudents = (laboratoria) => {};
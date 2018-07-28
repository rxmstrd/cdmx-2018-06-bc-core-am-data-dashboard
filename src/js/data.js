const API = 'https://raw.githubusercontent.com/Laboratoria/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json';
window.onload = () => {
  fetch(API)
  .then((response) => response.json())
  .then((datos) => {
    console.log('API: ', datos);
    renderInfo(datos);
    renderGeneraciones(datos);
    renderEstudiantes(datos);
    }).catch(error => {
      console.log(error);
    })
}



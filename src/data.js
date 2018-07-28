//Se declara una variable global que se carga al iniciar el sitio, 
window.computeGenerationsStats = (laboratoria) => {
  const generations = {
    generation: null,
    campus: null,
    students: null,
    count: null,
    average: null,
  };
  for(key in laboratoria){
    generations.campus = key;

    for(item in laboratoria[key].generacion){
      console.log(item)
      generations.count =laboratoria[key].generacion[item].estudiantes.length;
      let students = laboratoria[key].generacion[item].estudiantes;
      students.reduce((prev, current)=>{
        return prev +
        current.progreso.porcentajeCompletado;
      }, 0);
   
  }
}; 

window.computeStudentsStats = (laboratoria) => {
  const student = {
    campus: null,
    generation: null,
    stats: null,
  };
};

window.sortStudents = (laboratoria) => {};

window.filterStudents = (laboratoria) => {

};
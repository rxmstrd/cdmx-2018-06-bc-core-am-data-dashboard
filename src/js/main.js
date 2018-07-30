// Se declara la variable que se llama en data js
renderSedes = (datos) => {
// La variable contenido se dirige al párrafo sede en html
  let mostrarSedes = "<p>Sedes</p>";
  let sedes = Object.keys(datos);
  console.log('sedes:', sedes );
  for (let i = 0; i < sedes.length; i++) {
    let sede = sedes[i];
    mostrarSedes += `
      <a class="nav-sedes" id="sedes-${sede}">
        ${sede}
      </a>
      <div id="generaciones-${sede}"></div>`;
    console.log('- sede:', sede);
  }
  const contenedorHtml = document.getElementById('sedes');
  contenedorHtml.innerHTML = mostrarSedes;
}

renderGeneraciones = (datos) => {
  // variable vacía porque cambia el contenido con la función
  let muestraGeneraciones = "";
  let sedes = Object.keys(datos);
  let generaciones;
  for (let i = 0; i < sedes.length; i++) {
    let sede = sedes[i];
    document.getElementById(`sedes-${sede}`).addEventListener('click', (e) => {
      if ( `${sede}` === 'lima' ) {
        generaciones = datos.lima.generacion;
        muestraGeneraciones = "";
        document.getElementById('generaciones-lima').style.display = "block";
        document.getElementById('generaciones-santiago').style.display = "none";
        document.getElementById('generaciones-mexico').style.display = "none";
        //POr cada "gen" (objeto de json) en la variable generaciones con lo datos
        for (gen in generaciones) {
          console.log('- lima: ', gen);
          muestraGeneraciones += `
          <a class="nav-generacion" id="generacion-${sede}-${gen}">${gen}</a>
        `;
        }
      }
      else if (`${sede}` === 'mexico' ) {
        generaciones = datos.mexico.generacion;
        muestraGeneraciones = "";
        document.getElementById('generaciones-mexico').style.display = "block";
        document.getElementById('generaciones-santiago').style.display = "none";
        document.getElementById('generaciones-lima').style.display = "none";
        for (gen in generaciones) {
          console.log('- mexico: ', gen);
          muestraGeneraciones += `
          <a class="nav-generacion" id="generacion-${sede}-${gen}">${gen}</a>
        `;
        }
      }
      else if (`${sede}` === 'santiago') {
        generaciones = datos.santiago.generacion;
        muestraGeneraciones = "";
        document.getElementById('generaciones-santiago').style.display = "block";
        document.getElementById('generaciones-lima').style.display = "none";
        document.getElementById('generaciones-mexico').style.display = "none";
        for (gen in generaciones) {
          console.log('- santiago: ', gen);
          muestraGeneraciones += `
          <a class="nav-generacion" id="generacion-${sede}-${gen}">${gen}</a>
        `;
        }
      }
      const contenedorBotones = document.getElementById(`generaciones-${sede}`);
      contenedorBotones.innerHTML = muestraGeneraciones;
      
      // ESTUDIANTES
      
      //estudiantes lima tercera
      document.getElementById('generacion-lima-tercera').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        let estudiantes = datos.lima.generacion.tercera.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
        contenedor.innerHTML += `<div class="cardEstudiante">
        <div class="informacionEstudiante">
        <p>Nombre: ${estudiantes[m].nombre}</p>
        <p>Correo: ${estudiantes[m].correo}</p>
        <p>Turno: ${estudiantes[m].turno}</p>
        <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;    
      }
      titulos.innerHTML= "Estudiantes Lima: Tercera Generación"
        contenedor.innerHTML;
      })

      //estudiantes lima cuarta generación
      document.getElementById('generacion-lima-cuarta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        let estudiantes = datos.lima.generacion.cuarta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
        contenedor.innerHTML += `<div class="cardEstudiante">
        <div class="informacionEstudiante">
        <p>Nombre: ${estudiantes[m].nombre}</p>
        <p>Correo: ${estudiantes[m].correo}</p>
        <p>Turno: ${estudiantes[m].turno}</p>
        <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;      
      }
      titulos.innerHTML= "Estudiantes Lima: Cuarta Generación"
        contenedor.innerHTML;
      })

    //estudiantes lima quinta generación
      document.getElementById('generacion-lima-quinta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        let estudiantes = datos.lima.generacion.quinta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
        contenedor.innerHTML += `<div class="cardEstudiante">
        <div class="informacionEstudiante">
        <p>Nombre: ${estudiantes[m].nombre}</p>
        <p>Correo: ${estudiantes[m].correo}</p>
        <p>Turno: ${estudiantes[m].turno}</p>
        <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;      
      }
      titulos.innerHTML= "Estudiantes Lima: Quinta Generación"
        contenedor.innerHTML;
      })

    //estudiantes méxico tercera
    document.getElementById('generacion-mexico-tercera').addEventListener("click", ()=>{
      contenedor.innerHTML = '';
      let estudiantes = datos.mexico.generacion.tercera.estudiantes;
      for(m = 0; m<estudiantes.length; m++){
      contenedor.innerHTML += `<div class="cardEstudiante">
      <div class="informacionEstudiante">
      <p>Nombre: ${estudiantes[m].nombre}</p>
      <p>Correo: ${estudiantes[m].correo}</p>
      <p>Turno: ${estudiantes[m].turno}</p>
      <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;   
    }
    titulos.innerHTML= "Estudiantes México: Tercera Generación"
      contenedor.innerHTML;
    })

    //estudiantes mexico cuarta generación
    document.getElementById('generacion-mexico-cuarta').addEventListener("click", ()=>{
      contenedor.innerHTML = '';
      let estudiantes = datos.mexico.generacion.cuarta.estudiantes;
      for(m = 0; m<estudiantes.length; m++){
      contenedor.innerHTML += `<div class="cardEstudiante">
      <div class="informacionEstudiante">
      <p>Nombre: ${estudiantes[m].nombre}</p>
      <p>Correo: ${estudiantes[m].correo}</p>
      <p>Turno: ${estudiantes[m].turno}</p>
      <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;      
    }
    titulos.innerHTML= "Estudiantes México: Cuarta Generación"
      contenedor.innerHTML;
    })
     
    //estudiantes mexico quinta generación
    document.getElementById('generacion-mexico-quinta').addEventListener("click", ()=>{
      contenedor.innerHTML = '';
      let estudiantes = datos.mexico.generacion.quinta.estudiantes;
      for(m = 0; m<estudiantes.length; m++){
      contenedor.innerHTML += `<div class="cardEstudiante">
      <div class="informacionEstudiante">
      <p>Nombre: ${estudiantes[m].nombre}</p>
      <p>Correo: ${estudiantes[m].correo}</p>
      <p>Turno: ${estudiantes[m].turno}</p>
      <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;      
    }
    titulos.innerHTML= "Estudiantes México: Quinta Generación"
      contenedor.innerHTML;
    })

    //estudiantes santiago tercera
    document.getElementById('generacion-santiago-tercera').addEventListener("click", ()=>{
      contenedor.innerHTML = '';
      let estudiantes = datos.santiago.generacion.tercera.estudiantes;
      for(m = 0; m<estudiantes.length; m++){
      contenedor.innerHTML += `<div class="cardEstudiante">
      <div class="informacionEstudiante">
      <p>Nombre: ${estudiantes[m].nombre}</p>
      <p>Correo: ${estudiantes[m].correo}</p>
      <p>Turno: ${estudiantes[m].turno}</p>
      <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;    
    }
    titulos.innerHTML= "Estudiantes Santiago: Tercera Generación"
      contenedor.innerHTML;
    })

    //estudiantes santiago cuarta generación
    document.getElementById('generacion-santiago-cuarta').addEventListener("click", ()=>{
      contenedor.innerHTML = '';
      let estudiantes = datos.santiago.generacion.cuarta.estudiantes;
      for(m = 0; m<estudiantes.length; m++){
      contenedor.innerHTML += `<div class="cardEstudiante">
      <div class="informacionEstudiante">
      <p>Nombre: ${estudiantes[m].nombre}</p>
      <p>Correo: ${estudiantes[m].correo}</p>
      <p>Turno: ${estudiantes[m].turno}</p>
      <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;      
    }
    titulos.innerHTML= "Estudiantes Santiago: Cuarta Generación"
      contenedor.innerHTML;
    })

  //estudiantes santiago quinta generación
    document.getElementById('generacion-santiago-quinta').addEventListener("click", ()=>{
      contenedor.innerHTML = '';
      let estudiantes = datos.santiago.generacion.quinta.estudiantes;
      for(m = 0; m<estudiantes.length; m++){
      contenedor.innerHTML += `<div class="cardEstudiante">
      <div class="informacionEstudiante">
      <p>Nombre: ${estudiantes[m].nombre}</p>
      <p>Correo: ${estudiantes[m].correo}</p>
      <p>Turno: ${estudiantes[m].turno}</p>
      <p>Progreso: ${estudiantes[m].progreso.porcentajeCompletado}% Completado</p> `;      
    }
    titulos.innerHTML= "Estudiantes Santiago: Quinta Generación"
      contenedor.innerHTML;
    })
    });
  }
}

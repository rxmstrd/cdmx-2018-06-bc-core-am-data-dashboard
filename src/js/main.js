

// Cargar e imprmir datos iniciales
renderInfo = (datos) => {
// La variable contenido se dirige al párrafo sede en html
  let contenido = "<p>Sedes</p>";
// La variable sedes es igual a los dato obtenidos del objeto
  let sedes = Object.keys(datos);
  console.log('sedes:', sedes );
// el for invoca a lo datos obtenidos del objeto en sedes para iterarlos
  for (let i = 0; i < sedes.length; i++) {
//la variable sede es igual a la iteracion de sedes
    let sede = sedes[i];
//Se invoca a contenido para cargarlo, se inyecta un "a" con una clase general Sedes, que va
// a obtener su id sedes con -${sede} para que sea dinàmico. Esto es el boton y el nombre que lo pinta
//despues del "a" se abre un div con id "generaciones" que con ${sede} obtiene su nombre y valor dinàmico
    contenido += `
      <a class="nav-sedes" id="sedes-${sede}">
        ${sede}
      </a>
      <div id="generaciones-${sede}"></div>`;
    console.log('- sede:', sede);
  }
//aquí se apunta al elemento sedes donde se imprimirá
  const contenedor = document.getElementById('sedes');
//se manda a imprimir
  contenedor.innerHTML = contenido;
}


// arrow function
renderGeneraciones = (datos) => {
  // variable vacía porque cambia el contenido con la función
  let contenido = "";
  let sedes = Object.keys(datos);
  let generaciones;
  for (let i = 0; i < sedes.length; i++) {
    let sede = sedes[i];
    document.getElementById(`sedes-${sede}`).addEventListener('click', (e) => {
      if ( `${sede}` === 'lima' ) {
        generaciones = datos.lima.generacion;
        contenido = "";
        document.getElementById('generaciones-lima').style.display = "block";
        document.getElementById('generaciones-santiago').style.display = "none";
        document.getElementById('generaciones-mexico').style.display = "none";
        //POr cada "gen" (objeto de json) en la variable generaciones con lo datos
        for (gen in generaciones) {
          console.log('- lima: ', gen);
          contenido += `
          <a class="nav-generacion" id="generacion-${sede}-${gen}">${gen}</a>
        `;
        }
      }
      else if (`${sede}` === 'mexico' ) {
        generaciones = datos.mexico.generacion;
        contenido = "";
        document.getElementById('generaciones-mexico').style.display = "block";
        document.getElementById('generaciones-santiago').style.display = "none";
        document.getElementById('generaciones-lima').style.display = "none";
        for (gen in generaciones) {
          console.log('- mexico: ', gen);
          contenido += `
          <a class="nav-generacion" id="generacion-${sede}-${gen}">${gen}</a>
        `;
        }
      }
      else if (`${sede}` === 'santiago') {
        generaciones = datos.santiago.generacion;
        contenido = "";
        document.getElementById('generaciones-santiago').style.display = "block";
        document.getElementById('generaciones-lima').style.display = "none";
        document.getElementById('generaciones-mexico').style.display = "none";
        for (gen in generaciones) {
          console.log('- santiago: ', gen);
          contenido += `
          <a class="nav-generacion" id="generacion-${sede}-${gen}">${gen}</a>
        `;
        }
      }
      const contenedorBotones = document.getElementById(`generaciones-${sede}`);
      contenedorBotones.innerHTML = contenido;
      


      // ESTUDIANTES
      const arrayTitulos = ['Alumna', 'Correo electrónico', 'Turno', '% Completado']
      // contenedor principal
      const contenedor = document.getElementById('contenedor');

      // estudiantes lima tercera
      document.getElementById('generacion-lima-tercera').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.lima.generacion.tercera.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
      // estudiantes lima cuarta
      document.getElementById('generacion-lima-cuarta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.lima.generacion.cuarta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
      // estudiantes lima quinta
      document.getElementById('generacion-lima-quinta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.lima.generacion.quinta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })

      // estudiantes mexico tercera
      document.getElementById('generacion-mexico-tercera').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.mexico.generacion.tercera.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
      // estudiantes mexico tercera
      document.getElementById('generacion-mexico-tercera').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.mexico.generacion.tercera.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
      // estudiantes mexico cuarta
      document.getElementById('generacion-mexico-cuarta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.mexico.generacion.cuarta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
      // estudiantes mexico quinta
      document.getElementById('generacion-mexico-quinta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.mexico.generacion.quinta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })

      // estudiantes santiago tercera
      document.getElementById('generacion-santiago-tercera').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.santiago.generacion.tercera.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
      // estudiantes santiago cuarta
      document.getElementById('generacion-santiago-cuarta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.santiago.generacion.cuarta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
      // estudiantes santiago quinta
      document.getElementById('generacion-santiago-quinta').addEventListener("click", ()=>{
        contenedor.innerHTML = '';
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const tr = document.createElement('tr');
        
        arrayTitulos.forEach((item)=> {
          const td = document.createElement('td');
          td.innerHTML = item;
          tr.appendChild(td)
        })
        thead.appendChild(tr);
        table.appendChild(thead);
        table.appendChild(tbody);
        table.classList.add("listaEstudiantes");
        
        let estudiantes = datos.santiago.generacion.quinta.estudiantes;
        for(m = 0; m<estudiantes.length; m++){
          console.log(estudiantes[m].nombre);
          tbody.innerHTML += `
            <tr>
              <td><a style="color:blue; cursor:pointer;" id="${estudiantes[m].correo}">${estudiantes[m].nombre}</a></td>
              <td>${estudiantes[m].correo}</td>
              <td>${estudiantes[m].turno}</td>
              <td>${estudiantes[m].progreso.porcentajeCompletado}</td>
            </tr>`
        }
        contenedor.appendChild(table);
      })
    

      

    });

  }

}


  const contenido = document.getElementById('resultado');
  console.log(contenido)
  renderInfo = (datos) => {
    document.getElementById('sedes').addEventListener('click', (event) =>{
    
      console.log(datos); 

      let nombreSedes = Object.keys(datos);
      console.log(nombreSedes)

      let resultado = "";
      console.log(Object.values(datos)[0])
      const info = Object.values(datos)[0];

      for (let i = 0; i < nombreSedes.length; i++){
        resultado +=  '<div class="sedes"><p>' + `${nombreSedes[i]}` + '</p></div>'
      }

      console.log(resultado);
      contenido.innerHTML = resultado; // ...y se imprimen todos los elementos dentro de nuestro contenedor
  });

}

window.onload = () => {
  fetch("../data/laboratoria.json")
  .then((response)=> response.json()
  ).then((data)=>{
    listeners(data);
  });
  const listeners = (data) => {
    const buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click",()=>{
        //computeStudentsStats(laboratoria);
        let generations = computeStudentsStats(data);
        drawGenerations(generations);
      });
    }
  }
  };
//leer un archivo externo, tipo JSON
//JavaScript Object Notation: notacion de objetos de js

// usamos fetch para leer archivos y apis
fetch("./assets/js/aprendiz.json")
  //   //primer salida .then serializa(transforma) los datos en arreglos de objetos JS
  //   .then(function (res) {
  //     return res.json();
  //   })
  //   // la accion a desarrollar con ese objeto transformado
  //   .then(function (res) {
  //     console.log(res);
  //   });

  //======================================================================================
  // usamos fetch para leer archivos y apis
  //fetch("https://jsonplaceholder.typicode.com/photos")
  //primer salida .then serializa(transforma) los datos en arreglos de objetos JS
  .then((res) => res.json())
  // la accion a desarrollar con ese objeto transformado
  .then((datos) => {
    let miTabla = document.getElementById("mitabla");

    for (let i = 0; i < datos.length; i++) {
      //crear la fila
      let fila = `
   <tr>
   <th scope="row">${datos[i].id}</th>
   <td>${datos[i].First}</td>
   <td>${datos[i].Last}</td>
   <td>${datos[i].Handle}</td>
   <td><a href="#"><i class="bi bi-pencil"></i></a></td>
   <td><a href="#"><i class="bi bi-trash"></i></a></td> 
   </tr>
   `;
      // actualizamos el elemento DOM (La tabla HTML)
      miTabla.innerHTML += fila;
    }
  });

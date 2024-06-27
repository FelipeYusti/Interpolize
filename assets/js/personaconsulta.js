// let datos = [9, "Juan", "Arias", "juani16@gmail.com"];
//capturamos el elemento html
let datos = [
  { id: 123, First: "Juan", Last: "Perez", Handle: "juanPe@gmail.com" },
  { id: 234, First: "Luis", Last: "Lopez", Handle: "lulo@gmail.com" },
  { id: 456, First: "Felipe", Last: "Yusty", Handle: "lulo@gmail.com" },
  { id: 678, First: "Jorge", Last: "Cuioso", Handle: "lulo@gmail.com" },
  { id: 891, First: "Daniel", Last: "Salaz", Handle: "lulo@gmail.com" }
];
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

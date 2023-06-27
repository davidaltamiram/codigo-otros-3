// Tenemos un li de productos

//Crear un arreglo con su respectivo key: value
const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];  //agregarle un ;

//cambiar el .getElementsByName por el ID
const li = document.getElementById("lista-de-productos");
const $i = document.querySelector('.input');

//Añadir la funcion displayProductos
function displayProductos(productos){
  
  for (let i = 0; i < productos.length; i++) {
    //Crear (div)
    var d = document.createElement("div");
    d.classList.add("producto");

    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productos[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productos[i].img);
    //insertar con append titulo e imagen
    d.appendChild(ti);
    d.appendChild(imagen);
   
    li.appendChild(d);
  } 

}

displayProductos(productos);

//agregar # para el id
const botonDeFiltro = document.querySelector("#button");

botonDeFiltro.onclick = function() {
  //eliminar productos existentes de la lista
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }
  //          obtener el valor del input
  const texto = $i.value;
  //imprime en consola lo escrito del input
  console.log(texto);

                           
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    //crear elemento (div)
    var d = document.createElement("div");
    d.classList.add("producto");
  
    var ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = productosFiltrados[i].nombre;
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
    
    
    d.appendChild(ti);
    d.appendChild(imagen);
    
    li.appendChild(d);
  }
}; 


  const filtrado = (productos = [], texto) => {
    //retornara los productos del tipo de color que escriba y la descripcion
    return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
  }; 
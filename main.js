let nombreUsuario= prompt(`Decinos tu nombre`)

let precio = 0

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

const alimento1 = new Producto ("Alimento Gatito", 500);
const alimento2 = new Producto ("Alimento Adulto", 800);
const collar = new Producto ("Collar", 200);
const juguete = new Producto ("Juguete", 500);
const comedero = new Producto ("Comedero", 300);
const pretal1 = new Producto ("Pretal S", 500);
const pretal2 = new Producto ("Pretal M", 600);
const pretal3 = new Producto ("Pretal L", 700);

const arrayProductos = [alimento1, alimento2, collar, juguete, comedero, pretal1, pretal2, pretal3]

let seleccionUsuario = prompt (`Hola ${nombreUsuario}, ¿Deseas comprar algo para tu michi?`)

if (seleccionUsuario == "si"){
    alert (`Estos son nuestros productos disponibles..`);
    let listaProductos = arrayProductos.map((producto) => producto.nombre + ` $` + producto.precio)
    alert(listaProductos.join(`\n`))
} else if (seleccionUsuario == "no"){
    alert(`Será la próxima, te esperamos ${nombreUsuario}!`)
}

while(seleccionUsuario != "no" || "si"){
let producto = prompt (`Qué te gustaría comprar?`).toLocaleLowerCase()
}

if(producto == "alimento gatito" || "alimento adulto" || "collar" || "juguete" || "comedero" || "pretal s" || "pretal m" || "pretal l"){
    switch(producto){
        case "alimento gatito":
        precio = 500;
        break;
        case "alimento adulto":
        precio = 800;
        break;
        case "collar":
        precio = 200;
        break;
        case "juguete":
        precio = 500;
        break;
        case "comedero":
        precio = 300;
        break;
        case "pretal S":
        precio = 500;
        break;
        case "pretal M":
        precio = 600;
        break;
        case "pretal L":
        precio = 700;
        break;
        default:
        break;
    }
    compraUsuario.push({producto, precio})
    
    } else {
        alert (`Elegí uno de los productos disponibles`)
    } 

seleccionUsuario = prompt (`${nameUser} querés elegir más productos?`)

while(seleccionUsuario == "si"){
    compraUsuario.arrayProductos.forEach((compraUsuario) => {
        alert (`Productos: ${compraUsuario.producto}, total a pagar ${compraUsuario.precio}`)
    });
    break;
}


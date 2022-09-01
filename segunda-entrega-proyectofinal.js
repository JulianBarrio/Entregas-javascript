class calzado {
    constructor(clase, marca, precio) {
        this.clase = clase
        this.marca = marca
        this.precio = Number(precio)
    }
}

const prod1 = new calzado("Zapatilla", "Nike", 200)
const prod2 = new calzado("Botines", "Adidas", 100)
const prod3 = new calzado("Ojotas", "Puma", 50)

const producto = [];

producto.push(prod1, prod2, prod3)
console.log(producto)

let form = document.getElementById('form')
let inputProd = document.getElementById('iprod')

let mostrarProdSolos = document.getElementById('mostrarProdSolos')
let mostrarTodosProd = document.getElementById('mostrarTodosProd')
let btnMostrarProd = document.getElementById('btnMostrar')
let mostrarPago = document.getElementById('mostrarPago')
let btnMostrarPago = document.getElementById('btnPagar')

let iclase = form.children[1].value;
let imarca = form.children[4].value;
let iprecio = form.children[7].value;
let formaPago = form.children[17].value;

form.addEventListener('submit', agregarProd)
btnMostrarProd.addEventListener('click', mostrarTodosLosProd)
btnMostrarPago.addEventListener('click', mostrarElPago)




function validarDatos() {
    iclase = form.children[1].value;
    imarca = form.children[4].value;
    iprecio = form.children[7].value;

    console.log(`Calzado agregado ${iclase} de la marca ${imarca} $${iprecio}`)



    if (iclase == '' || imarca == '' || iprecio == '') {
        alert("Error debe completar todos los campos para continuar")
        inputProd.focus()
        bandera = false;
    } else {
        bandera = true;
    }
}

function agregarProd(e) {

    e.preventDefault()
    validarDatos();
    if (bandera == true) {
        let opcion = confirm("Esta seguro de comprar este calzado")
        if (opcion == true) {
            let datos = e.target
            producto.push(new calzado(iclase, imarca, iprecio))
            datos.children[1].value = "";
            datos.children[4].value = "";
            datos.children[7].value = "";

            mostrarProdSolos.innerHTML = ""

            mostrarUnProd()

            const guardarLocal = (clave, valor) => {
                localStorage.setItem(clave, valor)
            };
            guardarLocal("Productos", JSON.stringify(producto));
            const convertirEnString = JSON.stringify(producto)
            console.log(convertirEnString)

            


        } else {
            alert("No se agregara el usuario")
        }

    } else {
        inputProd.focus
    }

}

const mostrarUnProd = () => {
    mostrarProdSolos.innerHTML = `
    <h3>Ultimo producto ingresado:</h3>
    <p><strong>Producto: </strong>${iclase}</p>
    <p><strong>Precio: </strong>${imarca}</p>
    <p><strong>Detalle: </strong>${iprecio}</p>`
}

function mostrarTodosLosProd(e) {
    e.preventDefault();
    mostrarTodosProd.innerHTML = '<h4>Compraste</h4>';
    for (const datos of producto) {
        
        mostrarProdSolos.innerHTML = ""
        mostrarTodosProd.innerHTML += `        
        <p><strong>${datos.clase}</strong>
         <strong> de Marca: </strong>${datos.marca}
        <strong>Precio: </strong>${datos.precio}</p>`           

    }
    
    const precioTotal = producto.reduce((acc, dato) => {
        return acc = acc + dato.precio;
    }, 0)
    console.log(precioTotal)

   
    mostrarPagoTotal.innerHTML = `El importe a pagar total es de $ ${precioTotal}, si paga con Efectivo hay 20% de descuento, si paga con Tarjeta 10% de recargo`
    

}


function validarPago() {
    formaPago = form.children[17].value;
    console.log(formaPago)
   
}

function mostrarElPago(e) {
    e.preventDefault()
    validarPago();
       mostrarPago.innerHTML = `<h5>Usted Eligio pagar con ${formaPago} </h5> `
}

// duda de como hacer lo de la forma de pago

// switch (formaPago) {
//     case "Efectivo":
//         const descuento = x => x * 0.20;
//         const precioEfectivo = (precioTotal, descuento) => precioTotal - descuento;
        
//         let p = document.createElement('p')
//         p.innerHTML = 'la compra total por pagar en efectivo es ${precioEfectivo}'
        
//         break;

//     case "Tarjeta":
//         const recargo = x => x * 0.10;
//         const precioTarjeta = (precioTotal, recargo) => precioTotal + recargo;
        
//         let span = document.createElement('span')
//         span.innerHTML = 'la compra total por pagar en efectivo es ${precioTarjeta}'
//         document.body.append(span)

//         break;
//     }

//     if (formaPago == Efectivo){
//         const descuento = x => x * 0.20;
//         const precioEfectivo = (precioTotal, descuento) => precioTotal - descuento;
        
//         let p = document.createElement('p')
//         p.innerHTML = 'la compra total por pagar en efectivo es ${precioEfectivo}'

//     } else {
//         const recargo = x => x * 0.10;
//         const precioTarjeta = (precioTotal, recargo) => precioTotal + recargo;
        
//         let span = document.createElement('span')
//         span.innerHTML = 'la compra total por pagar en efectivo es ${precioTarjeta}'
//         document.body.append(span)

//     }
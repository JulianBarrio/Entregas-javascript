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
let formaPago = form.children[13].value;

form.addEventListener('submit', agregarProd)
btnMostrarProd.addEventListener('click', mostrarTodosLosProd)
btnMostrarPago.addEventListener('click', mostrarElPago)




function validarDatos() {
    iclase = form.children[1].value;
    imarca = form.children[4].value;
    iprecio = form.children[7].value;

    console.log(iclase)
    console.log(imarca)
    console.log(iprecio)


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

}

function validarPago() {
    formaPago = form.children[13].value;
    console.log(formaPago)
}

function mostrarElPago(e) {
    e.preventDefault()
    validarPago();

    mostrarPago.innerHTML = `<h5>Usted Eligio pagar con ${formaPago} </h5>  `


}
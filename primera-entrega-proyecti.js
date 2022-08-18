class calzado {
    constructor(nombre, clase, marca, precio) {
        this.nombre = nombre.toUpperCase()
        this.clase = clase
        this.marca = marca
        this.precio = Number(precio)
    }
}

const producto = [];

let nombre = prompt("Ingresa tu nombre")
let cantidadProducto = parseInt(prompt("Hola " + nombre.toUpperCase() + " cuantos calzados vas a comprar?"))

for (let i = 1; i <= cantidadProducto; i++) {

    let clase = prompt(nombre.toUpperCase() + " escribe el tipo de calzado? \n1. Zapatilla \n2. Ojotas \n3. Botines")
    let marca = prompt("de que marca es el calzado? \n1. Nike \n2. Adidas \n3. Puma")
    let precio = Number(prompt("que precio tiene el calzado?"))



    producto.push(new calzado(nombre, clase, marca, precio))

    for (const dato of producto) {
        console.log(dato.nombre + " compro " + dato.clase + " de marca " + dato.marca + " a " + dato.precio)
    }
}
const precioTotal = producto.reduce((acc, dato) => {
    return acc = acc + dato.precio;
}, 0)
alert(nombre.toUpperCase() + " el precio total de tu compra es " + precioTotal)

let formaPago = prompt("De que forma vas a pagar? \n1 Escribe 1 si pagas en efectivo (hay un 20% de descuento) \n2  Escribe 2 si pagas en tarjeta (tiene un 10% de recargo")
switch (formaPago) {
    case "1":
        const descuento = x => x * 0.20;
        const precioEfectivo = (precioTotal, descuento) => precioTotal - descuento;
        alert("El precio final de tu compra por pagar en efectivo es es " + precioEfectivo(precioTotal, descuento(precioTotal)))
        console.log("La compra total de " + nombre.toUpperCase() + " es " + precioEfectivo(precioTotal, descuento(precioTotal)) + " por pagar en efectivo")
        alert("Gracias " + nombre.toUpperCase() + " por comprar en nuestro local! el precio final de tu compra es " + precioEfectivo(precioTotal, descuento(precioTotal)) + " y pagaste en efectivo")
        break;
    case "2":
        const recargo = x => x * 0.10;
        const precioTarjeta = (precioTotal, recargo) => precioTotal + recargo;
        alert("El precio final de tu compra por pagar con tarjeta es " + precioTarjeta(precioTotal, recargo(precioTotal)))
        console.log("La compra total de " + nombre.toUpperCase() + " es " + precioTarjeta(precioTotal, recargo(precioTotal)) + " por pagar con tarjeta")
        alert("Gracias " + nombre.toUpperCase() + " por comprar en nuestro local! el precio final de tu compra es " + precioTarjeta(precioTotal, recargo(precioTotal)) + " y pagaste con tarjeta")
        break;
        default:
        alert("no tenemos ese metodo de pago")
        break;
}
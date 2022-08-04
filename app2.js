let nombre = prompt("Ingresa tu nombre")
let pregunta = prompt("Hola " + nombre + " queres comprar una Zapatilla \n1. si \n2. no")

while(pregunta != "no") {
 switch (pregunta) {
    case "si":
        let precioZapatilla = Number(prompt("Ingresa el precio de la zapatilla "))
        let formaPago = prompt("De que forma va a pagar la zapatilla? \n1 efectivo (hay un 20% de descuento) \n2 tarjeta (tiene un 10% de recargo")
        switch (formaPago) {
            case "efectivo":
                const descuento = x => x * 0.20;
                const precioEfectivo = (precioZapatilla, descuento) => precioZapatilla - descuento;
                alert("El precio final de tu compra es " + precioEfectivo(precioZapatilla, descuento(precioZapatilla)))
                pregunta = prompt(" Queres seguir  comprando? \n1. si \n2. no")
                break;
            case "tarjeta":
                const recargo = x => x * 0.10;
                const precioTarjeta = (precioZapatilla, recargo) => precioZapatilla + recargo;
                alert("El precio final de tu compra es " + precioTarjeta(precioZapatilla, recargo(precioZapatilla)))
                pregunta = prompt(" Queres seguir  comprando? \n1. si \n2. no")
                break;

            default:
                alert("no tenemos ese metodo de pago")
                break;
        }
        break;
    
}
}
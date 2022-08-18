let nombre = prompt("Ingresa tu nombre")
let pregunta = prompt("Hola " + nombre + "  queres comprar una Zapatilla \n1. si \n2. no")




while(pregunta != "no") {
 switch (pregunta) {
    case "si":
        let precioZapatilla = Number(prompt("Ingresa el precio de la zapatilla "))
        let formaPago = prompt("De que forma va a pagar la zapatilla? \n1 Escribe 1 si pagas en efectivo (hay un 20% de descuento) \n2  Escribe 2 si pagas en tarjeta (tiene un 10% de recargo")
        switch (formaPago) {
            case "1":
                const descuento = x => x * 0.20;
                const precioEfectivo = (precioZapatilla, descuento) => precioZapatilla - descuento;
                alert("El precio final de tu compra es " + precioEfectivo(precioZapatilla, descuento(precioZapatilla)))
                let precio = prompt("Ingresa el precio final de tu compra")
                class Producto{
                    constructor(prod, precio){
                        this.prod = prod.toUpperCase();
                        this.precio = Number(precio);
                    }
                  
                }
                
                const productos =[];
                
                let calzado = alert("Gracias " + nombre + " por comprar en nuestra tienda, de reglo van unas medias gratis")
                
                
                
                productos.push(new Producto( nombre + " compro zapatilla ", precio));
                productos.push(new Producto("medias gratis", 0));
                
                for (const dato of productos) {
                    console.log(dato.prod)
                    console.log(dato.precio)
                    
                }
                pregunta = prompt(" Queres seguir  comprando? \n1. si \n2. no")
                break;
            case "2":
                const recargo = x => x * 0.10;
                const precioTarjeta = (precioZapatilla, recargo) => precioZapatilla + recargo;
                alert("El precio final de tu compra es " + precioTarjeta(precioZapatilla, recargo(precioZapatilla)))
                let precio2 = prompt("Ingresa el precio final de tu compra")
                class Producto2{
                    constructor(prod2, precio2){
                        this.prod2 = prod2.toUpperCase();
                        this.precio2 = Number(precio2);
                    }
                  
                }
                
                const productos2 = [];
                
                let calzado2 = alert("Gracias " + nombre + " por comprar en nuestra tienda, de reglo van unas medias gratis")
                
                
                
                productos2.push(new Producto2( nombre + " compro zapatilla ", precio2));
                productos2.push(new Producto2("medias gratis", 0));
                
                for (const dato of productos2) {
                    console.log(dato.prod2)
                    console.log(dato.precio2)
                    
                }
                pregunta = prompt(" Queres seguir  comprando? \n1. si \n2. no")
                break;

            default:
                alert("no tenemos ese metodo de pago")
                break;
        }
        break;
       
}
}
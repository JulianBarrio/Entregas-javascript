
// creando las card con los productos

const stockProductos = [
    {id: 1, nombre: "Air force", tipo: "Zapatilla", cantidad: 1, precio: 200, marca: "Nike", img: "https://sneakernews.com/wp-content/uploads/2022/02/Nike-Air-Force-1-Low-DD8959-104-5.jpg",},
    {id: 2, nombre: "Jordan", tipo: "Zapatilla", cantidad: 1, precio: 400, marca: "Nike", img: "https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-retro-high-og-hyper-royal-air-jordan-kikikickz-741519_1024x1024.jpg?v=1617108157",},
    {id: 3, nombre: "Dunk Sb", tipo: "Zapatilla", cantidad: 1, precio: 600, marca: "Nike", img: "https://images.unsplash.com/photo-1584735175097-719d848f8449?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",},
    {id: 4, nombre: "Yezzy", tipo: "Zapatilla", cantidad: 1, precio: 800, marca: "Adidas", img: "https://http2.mlstatic.com/D_NQ_NP_884326-MLA49974831726_052022-W.jpg",},
    {id: 5, nombre: "Suede", tipo: "Zapatilla", cantidad: 1, precio: 100, marca: "Puma", img: "https://media.revistagq.com/photos/62304e87436b4eb4bbe78e72/16:9/w_1280,c_limit/PUMA-Classic-Suede-XXI-Campaign-2021.jpg",},
    {id: 6, nombre: "NB550", tipo: "Zapatilla", cantidad: 1, precio: 150, marca: "New Balance", img: "https://www.backseries.com/wp-content/uploads/2022/01/new-balance-550-2022-lanzamientos.png",},
]

let carrito = [];

const contenedorProductos = document.getElementById('contenedor-productos')

stockProductos.forEach((producto) => {
    let div = document.createElement('div')

    div.className = "card"
    div.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p>${producto.tipo}</p>
    <p>${producto.precio}</p>
    <p>${producto.marca}</p>

    `
contenedorProductos.appendChild(div)

// creando boton comprar y el push al carrito

let botonComprar = document.createElement("button");
botonComprar.innerText = "comprar"
botonComprar.className ="comprar"
div.appendChild(botonComprar)
botonComprar.addEventListener("click", () =>{
    carrito.push({
     id: producto.id,
     nombre: producto.nombre,
     precio: producto.precio,
     marca:producto.marca,
      img: producto.img,
      tipo: producto.tipo,
    })
    Toastify({
        text: `Agregaste ${producto.nombre} de marca ${producto.marca} de $ ${producto.precio} al carrito`,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: `bottom`, // `top` or `bottom`
        position: `right`, // `left`, `center` or `right`
         stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
   ;
})

})

//------- Creando carrito-------//

const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");



 const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement ("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h2 class="modal-header-titulo"> Productos Comprados.</h2>
    `
    modalContainer.appendChild(modalHeader)

    const modalButton = document.createElement("h1")

    modalButton.innerText = "Cerrar Carrito";
    modalButton.className = "modal-header-button";
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append (modalButton)

    carrito.forEach((producto) => {

        let carritoContent = document.createElement("div")
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.tipo}</h3>
    <h3>${producto.nombre}</h3>
    
    <h2>$${producto.precio}</h2>
    <p>${producto.marca}</p>

    `
    modalContainer.append(carritoContent)

    // crear boton para elminar el product

    let eliminar = document.createElement("span")
    eliminar.innerText = "Borrar"
    eliminar.className = "delete-product";
    carritoContent.append(eliminar)
    eliminar.addEventListener("click", eliminarProducto)
    })



// ---- Precio total--------//

    const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

    const totalBuying = document.createElement ("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar $${total}
    
       

    `;

    modalContainer.append(totalBuying)

        
    

}

verCarrito.addEventListener("click", pintarCarrito)

const eliminarProducto = () => {
    const foundId = carrito.find((Element) => Element.id)
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
        
    })
    pintarCarrito()
}


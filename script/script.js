
let title = document.getElementById("title")
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')

let cart = []

// MOSTRAR PRODUCTOS 
function mostrarProducts() {
    products.forEach((product) => {
        let card = document.createElement("div")
        showAllProducts.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        let name = document.createElement("h3")
        name.innerText = (product.name)
        let price = document.createElement("p")
        price.innerText = ("$ "+product.price)
        let buyButton = document.createElement("button","class=buyButton")
        buyButton.innerText = ("agregar al carrito")
        card.append(img, name, price, buyButton)

        buyButton.addEventListener("click", function () {
            cart.push(product)
            swal({
                text: "Agregaste "+ product.name +" al carrito!",
                icon: "success"
              });
            div.innerHTML = ``
            showCart()
        })
    })
}
console.log(cart)

mostrarProducts()

// MOSTRAR CARRITO 
let cartView = document.getElementById("showProductsCart")
let goToCart = document.getElementById("goToCart")
let carrito = document.getElementById("cartList")
const buttonCart = document.getElementById("mostrarCarrito")


let alertCart = document.createElement("h2")
alertCart.setAttribute("class", "alerta")

if (!cart.lenght) {
    alertCart.innerText = ("Carrito vacío")
    div.append(alertCart)
}


function showCart() {
    alertCart.remove()

    cart.forEach((element) => {
        const divCart = document.createElement('li')
        divCart.innerHTML += ` 
        <img src="${element.img}">
        <h6>${element.name}</h6>
        <h6>${'$'+ element.price}</h6>`
        div.appendChild(divCart)
    })


//REDUCE PRECIO TOTAL 
    const total = cart.map((item) => parseInt(item.price)).reduce((cartTotalPrice, currentItemPrice) => cartTotalPrice + currentItemPrice, 0);
    console.log(total)

    let totalCompra = document.createElement("h6")
    totalCompra.innerText = ("Total: $ " + total)
    div.append(totalCompra)

//VACIAR CARRITO 
let deleteCart = document.createElement("button")
deleteCart.innerText = ("Vaciar carrito")
div.append(deleteCart)

deleteCart.onclick = () => {
 
    cart = []
    div.innerHTML = ``
    console.log(cart)
}


//cart LocalStorage y JSON 

    localStorage.setItem("cart", JSON.stringify(cart))
    let storage = localStorage.getItem("cart")
    console.log(JSON.parse(storage))

}


buttonCart.onclick = () => {
    div.innerHTML = ``    
    showCart()
}

//TERMINAR COMPRA

function terminarCompra() {
    class Usuario {
        constructor(nombre, direccion, email) {
            this.nombre = nombre,
            this.direccion = direccion,
            this.mail = email
        }
    }
    let nombre = document.getElementById("nombre")
    let direccion = document.getElementById("direccion")
    let email = document.getElementById("email")
    let usuarioCompra = new Usuario(nombre.value, direccion.value, email.value)
    console.log(usuarioCompra)
    console.log(cart)

    //cart LocalStorage y JSON   

    localStorage.setItem("usuario", JSON.stringify(Usuario))
    let storage = localStorage.getItem("usuario")
    console.log(storage)    

} 

let terminarPedido = document.getElementById("terminarPedido")

terminarPedido.onclick = (e) => {
    e.preventDefault()
    terminarCompra()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//EMAIL SUNSCRIPTION MSG

function subscribirse(){

    swal("Quieres recibir informacion sobre nuevos lanzamientos y ofertas exclusivas?", {
        buttons: {
          cancel: "no",
          si: {
            text: "si",
            value: "si",
          }
        }
      })
      .then((value) => {
        switch (value) {

          case "si":
            swal("Para recibir informacion sobre nuevos Lanzamientos y Ofertas exclusivas ingresa tu email:", {
                content: "input",
              });
            break;
        }
      });
}
 
subscribirse()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// TEST DE FETCH CON URL 
const getDataByAJAX = () => {
    $.ajax({
        url: "https://swapi.dev/api/people",
        success: function (result){
            //console.log("result: ",result)
        },
        error: (error) =>{
            console.error(error);
        }
    });
}

getDataByAJAX()

const fetchLocalData=()=>{
    fetch('./data.json').then((response)=>response.json())
    .then((result)=>{
        renderTitle(result.contactoSection)
    }).catch((err)=>{
        console.error(err)
    })
}

fetchLocalData()

const rederContactSection = (footer)=> {
    console.log(footer)
}

const renderTitle = (footer)=>{
    //console.log(footer)
    let container = document.getElementById('contacto')
    let title = document.createElement('p')
    title.textContent ="Desarrollado por "+ footer.contacto +" " + footer.mail
    container.append(title)
}

///////////////////////////////////////////////////////////
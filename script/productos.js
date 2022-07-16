const products = [
 
    {    id: "1",
         description: "Hecho a mano ✿ Cruelty free ✿ Vegan. Guillermina con corazón calado, hebilla de níquel y base ancha de goma antideslizante y liviana de TR de 3,5cm de altura.",
         name: "Ariel",
         price: 5000,
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/ariel.jpg"
    },
    {    id: "2",
         description: "Hecho a mano ✿ Cruelty free ✿ Vegan. Mocasin inspirado en los 90s con base de goma ancha antideslizante liviana de goma TR de 3,5cm de altura.",
         name: "Orsola",
         price: 4500,
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/orsola.jpg"
    },
    {    id: "3",
         description: "Hecho a mano ✿ Cruelty free ✿ Vegan. Sandalia en terciopelo con escote cuadrado, hebilla níquel corazón, plataforma de 2,5cm y taco de 8,5cm con suelín de goma antideslizante.",
         name: "Nacar",
         price: "4700",
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/nacar.jpg"
    },  
    {    id: "4",
         description: "Hecho a mano ✿ Cruelty free ✿ Vegan. Acordonado con punta cuadrada, cordón encerado, cinco ojales y base de goma antideslizante liviana de TR con plataforma de 3,5cm de altura.",
         name: "Dita",
         price: 4100,
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/dita.jpg"
    },
    {    id: "5",
         description: "Hecho a mano en Argentina ✿ Cruelty free ✿ Vegan. Sandalia con plataforma de 8cm de altura, cierre pulsera con hebilla metálica regulable al tobillo y base liviana.",
         name: "Bombon",
         price: 4250,
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/bonbom.jpg"
    },
    {    id: "6",
         description: "Hecho a mano en Argentina ✿ Cruelty free ✿ Vegan. Bota de caña alta elastizada, horma cuadrada, con taco forrado, plataforma liviana y suela antideslizante de 8cm de altura.",
         name: "Moni",
         price: 5600,
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/moni.jpg"
    },
    {    id: "7",
         description: "Hecho a mano ✿ Cruelty free ✿ Vegan. Borcego caña alta de 26cm con 15 ojales negros y cierre lateral invisible. Base ancha de goma antideslizante TR de 3,5cm de altura.",
         name: "Daria",
         price: 5450,
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/daria.jpg"
    },
    {    id: "8",
         description: "Hecho a mano ✿ Cruelty free ✿ Vegan. Mocasín con plataforma liviana y suela antideslizante de 7cm de altura.",
         name: "Bulma",
         price: 5000,
         sizes: [36 ,37, 38, 39],
         img: "https://micaelaonti.github.io/shoessss/assets/imgssssss/bulma.jpg"
    }
]

//Stock de talle por modelo

let sizeStock = [{36:10, 37:10, 38:10, 39:10}]


//USE SPREAD PARA AGREGAR FUTUROS NUEVOS PRODUCTOS y TALLES.

//new products
function addProducts(){
const addProduct = [...products, { id: "undefined" , description: "undefined", name:"sin definir ", price: "sin definir", sizes: [36 ,37, 38, 39], img:""  }]
console.log(addProduct)
}
addProducts()

//new sizes
function addSizes(){
const addSize = [...sizeStock,{"undefined": 10}]
console.log(addSize)
}
addSizes()
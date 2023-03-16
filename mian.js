const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const producDetailClosetIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const producDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const chartList = [];

menuEmail.addEventListener("click", () => toggleMenu("desktop"));
menuHamIcon.addEventListener("click", () => toggleMenu("mobile"));
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
producDetailClosetIcon.addEventListener("click", closetProductDetailAside);

function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle("inactive");
  mobileMenu.classList.add("inactive");
}

function toggleMenu(platform) {
  if (platform === "desktop") {
    desktopMenu.classList.toggle("inactive");
  } else {
    mobileMenu.classList.toggle("inactive");
  }

  shoppingCartContainer.classList.add("inactive");
}

function setProductDetails(productId) {
  const product = productList.find((product) => {
    return product.id == productId;
  });

  const price = document.querySelector("#productDetail .price");
  const name = document.querySelector("#productDetail .name");
  const image = document.querySelector("#productDetail .image");
  const description = document.querySelector("#productDetail .description");

  price.innerHTML = `$${product.price}`;
  name.innerHTML = product.name;
  description.innerHTML = product.description;
  image.setAttribute("src", product.image);
}

function openProducDetailAside(producId) {
  setProductDetails(producId);

  producDetailContainer.classList.remove("inactive");
}

function closetProductDetailAside() {
  producDetailContainer.classList.add("inactive");

}



const productList = [
  {
    id: 0,
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Vehículo de dos ruedas, normalmente de igual tamaño, cuyos pedales transmiten el movimiento a la rueda trasera por medio de un plato, un piñón y una cadena.",
  },
  {
    id: 1,
    name: "TV",
    price: 500,
    image:
      "https://media.istockphoto.com/id/1308343280/es/foto/mockup-tv-en-el-armario-en-la-habitaci%C3%B3n-vac%C3%ADa-moderna-con-detr%C3%A1s-de-la-pared-azul-oscuro.jpg?b=1&s=612x612&w=0&k=20&c=Fj75EDG_kYvXkzS95W4GOvadx2gVHnRfs0ATpZz6T9I=",
    description:
      "aparato electrónico destinado a la recepción y reproducción de señales de televisión",
  },
  {
    id: 2,
    name: "Nike",
    price: 200,
    image:
      "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Los tenis Nike son zapatos predominantemente deportivos para mujeres y hombres y se caracterizan por ser ultraligeros debido a que se usan para hacer ejercicio, practicar algún deporte o recorrer grandes distancias a pie.",
  },
  {
    id: 3,
    name: "Iphone",
    price: 1000,
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "el teléfono iPhone es un dispositivo considerado inteligente por sus funciones multimedia, conexión a Internet, pantalla táctil con tecnología multi-touch y ausencia de teclado físico.",
  },
  {
    id: 4,
    name: "Laptop",
    price: 400,
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Un computador portátil o laptop es un equipo personal que puede ser transportado fácilmente. Muchos de ellos están diseñados para soportar software y archivos igual de robustos a los que procesa un computador de escritorio.",
  },
  {
    id: 6,
    name: "Aire Acondicionado",
    price: 1000,
    image:
      "https://media.istockphoto.com/id/586057100/es/foto/aire-acondicionado-split-en-una-pared-blanca.jpg?b=1&s=612x612&w=0&k=20&c=vVwa2J1OBHSZV5mjf8jv9KQq4_0KYtPBn_iXEzl0GP8=",
    description:
      "el aire acondicionado es un mecanismo eléctrico que acondiciona el aire de una habitación. Es decir, cambia el aire caliente e incómodo por aire fresco y confortable, con la humedad y temperatura precisas.",
  },
  {
    id: 7,
    name: "Mochila",
    price: 1000,
    image:
      "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Bolsa de lona o de otro material resistente que, provista de correas para ser cargada a la espalda, sirve para llevar provisiones o equipos en excursiones, expediciones, viajes, etc.",
  },
  {
    id: 8,
    name: "Moto",
    price: 2000,
    image:
      "https://media.istockphoto.com/id/996760770/es/foto/moto-negro-moderno.jpg?b=1&s=612x612&w=0&k=20&c=mHCJ_VCfjuoBTpwKn6vHEkLMU4nlIfUHuzG1Jfoc5FI=",
    description:
      "Es un vehículo de dos ruedas impulsado por un motor. El cuadro y las ruedas constituyen la estructura fundamental del vehículo. La rueda directriz es la delantera y la rueda motriz es la traser",
  },
  {
    id: 9,
    name: "jordan 1",
    price: 500,
    image:
      "https://images.pexels.com/photos/10195370/pexels-photo-10195370.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "El Air Jordan 1 es una de las zapatillas más vendidas de Nike en relación con la practica del baloncesto, desde sus orígenes siempre ha destacado por su gran versatilidad sobre la pista de basket.",
  },
  {
    id: 10,
    name: "CPU Gamer",
    price: 4000,
    image:
      "https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?b=1&s=612x612&w=0&k=20&c=8ILbnNmh8QBJkRLmkRfF0MiYejH7MN53XZmmj_N27XM=",
    description:
      "Una PC gamer acelera la velocidad de las herramientas de edición gráfica, hace fluida la ejecución de los programas y facilita la renderización de videos y efectos audiovisuales.",
  },
  {
    id: 11,
    name: "Teclado",
    price: 500,
    image:
      "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "un teclado es un dispositivo de entrada, en parte inspirado en el teclado de las máquinas de escribir, que utiliza un sistema de puntadas o márgenes, para que actúen como palancas mecánicas o interruptores electrónicos que envían toda la información a la computadora o al teléfono móvil.",
  },
  {
    id: 12,
    name: "Adidas",
    price: 2000,
    image:
      "https://images.pexels.com/photos/10046261/pexels-photo-10046261.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Adidas es una de las marcas más reconocidas en el mercado deportivo, es la favorita por muchos atletas y produce además de calzado deportivo, otros artículos tipo sport. Adidas es una multinacional alemana que diseña y fabrica calzado deportivo, ropa y accesorios",
  },
  {
    id: 13,
    name: "Jordan 4",
    price: 500,
    image:
      "https://images.pexels.com/photos/7460139/pexels-photo-7460139.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      'Las Air Jordan 4 supuso un cambio de ritmo tanto para Tinker como para Michael Jordan, ya que el zapato presentaba superposiciones de malla en los paneles laterales, una longitud poco ortodoxa de la lengüeta del talón y el logotipo de "Flight" en la lengüeta por primera vez en un Jordan.',
  },
  {
    id: 14,
    name: "Cartera",
    price: 1000,
    image:
      "https://images.pexels.com/photos/15121089/pexels-photo-15121089.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      'Objeto cuadrangular de pequeñas dimensiones hecho de piel u otro material, plegado por su mitad, que puede llevarse en el bolsillo y sirve para contener documentos, tarjetas, billetes de banco, etc. ',
  },
  {
    id: 15,
    name: "New era",
    price: 400,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgkI3zivQ6i10u4KJYEjYkB6JuYuG6zLvaQ&usqp=CAU",
    description: 'Prenda para cubrir la cabeza, especialmente la de tela, piel o punto con visera.',
  },
];

/* <div class="product-card">
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
            <div class="product-info">
                <div>
                    <p>$120,00</p>
                    <p>Bike</p>
                </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> */

function renderProducts(arr) {
  arr.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", () =>
      openProducDetailAside(product.id)
    );

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("p");

    const productPrice = document.createElement("div");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("div");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

    productImgCard.onclick = () => {
      addToCart(product.id);
    }
  });
}

function addToCart(itemId) {
  // Element create


  // Manejo del DOM
  const item = productList.find((i) => i.id === itemId);
  const cartListWrap = document.querySelector(".my-order-content");
  const orderWrap = document.querySelector(".order");
  const cartItem = document.createElement("div");

  cartItem.setAttribute("class", `shopping-cart shopping-cart-item-${itemId}`);

  const figure = document.createElement("figure");
  const img = document.createElement("img");

  img.setAttribute("src", item.image);

  const nameWrap = document.createElement("p");

  nameWrap.innerText = item.name;

  const priceWrap = document.createElement("p");

  priceWrap.innerText = "$" + item.price.toLocaleString("EN");

  const removeElem = document.createElement("img");

  removeElem.setAttribute("src", "./icons/icon_close.png");

  figure.appendChild(img);
  cartItem.appendChild(figure);
  cartItem.appendChild(nameWrap);
  cartItem.appendChild(priceWrap);
  cartItem.appendChild(removeElem);
  cartListWrap.insertBefore(cartItem, orderWrap);

  // Sum to counter
  chartList.push(item);

  const counter = document.getElementById("cartCounter");

  counter.innerText = chartList.length;

  showTotal();

  // Remove from list
  removeElem.onclick = () => removeItem(item.id);
}

function removeItem(id) {
  const cartListWrap = document.querySelector(".my-order-content");
  const itemElement = document.querySelector(`.shopping-cart-item-${id}`);
  const counter = document.getElementById("cartCounter");

  cartListWrap.removeChild(itemElement);

  const itemIndex = chartList.findIndex(i => i.id === id);

  chartList.splice(itemIndex, 1);

  counter.innerText = chartList.length;

  showTotal();
}

function showTotal() {
  const totalWrap = document.getElementById("cartTotal");
  const amount = chartList.reduce((a, b) => a + b.price, 0);
  totalWrap.innerText = "$" + amount.toLocaleString("EN");
}

renderProducts(productList);


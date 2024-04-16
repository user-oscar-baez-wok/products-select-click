const products_container = document.getElementById("products-container");
const urlApiPrincipal = "https://fakestoreapi.com/products";

async function getProducts(url) {
  products_container.innerHTML = "*** CARGANDO CONTENIDO ***";
  const response = await fetch(url);
  const data = await response.json();
  drawCharacters(data);
}

function drawCharacters(products) {
  products_container.innerHTML = "";
  products.map((product) => {
    products_container.innerHTML += `
    <div class="product-item" onclick="showItem(this)">
      <img src="${product.image}" class="product-img">
      <h3>${product.title}</h3>
      <p>$${product.price}</p>
    </div>
    `;
  });
}
let imgParaMostrar, tituloParaMostrar, precioParaMostrar;

const product_container = document.getElementById("product-container");
product_container.classList.add("active");
const product_menu_icon = document.getElementById("product-menu-icon");
product_menu_icon.classList.add("active");

function showItem(item) {
  //                ---------------------
  imgParaMostrar = item.getElementsByTagName("img")[0].src;
  let titulo = document.createElement("h3");
  titulo = item.getElementsByTagName("h3")[0].innerHTML;
  let precio = document.createElement("p");
  precio = item.getElementsByTagName("p")[0].innerHTML;
  product_container.classList.remove("active");
  product_menu_icon.classList.remove("active");
  product_menu_icon.addEventListener("click", () => {
    product_container.classList.add("active");
  });

  if (product_container.classList.contains("active")) {
    product_container.classList.remove("active");
  } else {
    const product_content = document.createElement("div");
    product_content.classList.add("product-select");
    product_content.innerHTML = `
    <img src="${imgParaMostrar}">
      <h3>${titulo}</h3>
      <p>${precio}</p>
    `;
    product_container.appendChild(product_content);
  }
}
getProducts(urlApiPrincipal);

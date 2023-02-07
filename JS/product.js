// https://kea-alt-del.dk/t7/api/products/1163
console.log("product.js");

async function getProduct() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products/1163");
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

function showProduct(product) {
  document.querySelector(".breadcrumbs p").textContent =
    product.productdisplayname;

  document.querySelector("#product h2").textContent =
    product.productdisplayname;

  document.querySelector("#product h3").textContent = product.brandname;

  document.querySelector(".price").textContent = product.price;

  document.querySelector(
    "#product img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

getProduct();

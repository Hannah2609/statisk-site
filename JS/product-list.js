console.log("product-list")

// 1. hent dataen 

async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=10");
  const data = await response.json();
  console.log(data);

// 2.  loope + 3. forEach
  data.forEach(showProduct);
}

getData();

function showProduct(product) {
    console.log(product);

// 4. fang vores template fra DOM
    const template = document.querySelector("#product-template").content;
// // 5. lav kopier
    const copy = template.cloneNode(true);
// // 6. skift dataen
    copy.querySelector("h2").textContent = product.productdisplayname;

        copy.querySelector("h3").textContent = product.brandname;
        
    // if(product.soldout) {
    //     copy.querySelector("article").classlist.add("product-soldout")
    // }


// // 7. Appende (tilføj data til siden)
    document.querySelector("main").appendChild(copy);

}
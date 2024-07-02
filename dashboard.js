
async function fetchJSON() {
const response = await fetch('https://fakestoreapi.com/products');
const product = await response.json();
return product;
}

fetchJSON().then(product => {
product;
});
fetchJSON().then(product =>{
    product.slice(0, 6).forEach(product => {
        document.getElementById("outer").innerHTML += `<div class="inner">
                <img src="${product.image}" alt="product" id="img" loading="lazy">
                <p id="title">${product.title}</p>
                <p id="description">${product.description}</p>
                <p id="price"><b>${product.price}$</b> <del>1000$</del></p>
                <button onclick ="cart()" onclick ="cart2()" class="btn">Add To Cart</button>
            </div> `;;
    });
    
})
fetchJSON().catch(product =>{
    window.location.href ="404.html"
})
function cart(){
    let cart = document.getElementById("nocart");
    cart.textContent++
}
function cart2(){
    let cart2 = document.getElementById("nocart2");
    cart2.textContent++
}
document.getElementById("view-more").addEventListener("click",()=>{
    window.location.href = "product.html"
})
setTimeout(() => {
   document.getElementById("loader").style.display = "none";
}, 5000);
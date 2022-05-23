

document.querySelector("#add_more_product").addEventListener("click",goToInventry)

function goToInventry() {
    window.location.href="index.html"
}

 let all_products =document.querySelector("#all_products")
 all_products.style.height="auto"

 let products =JSON.parse(localStorage.getItem("Products"))
 console.log(products)

products.map(function(elem) {
    let type = document.createElement("p")
    type.innerText = elem.type;
    let description= document.createElement("p")
    description.innerText= elem.desc;
    let price= document.createElement("p")
    price.innerText = elem.price;
    let image= document.createElement("img")
    image.src = elem.image;
   let btn= document.createElement("button")
   btn.innerText="Remove product"
   btn.setAttribute("id","remove_product")
   btn.addEventListener("click", function(){
    removeProduct(elem,index)
})
   
    image.style.width="200px"
    all_products.append(type,description,price,image,btn)
    

})


function removeProduct(elem,index) {
    products.splice(index,1)
    localStorage.setItem("products", JSON.stringify(products))
    window.location.reload()
}
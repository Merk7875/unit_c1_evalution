//store the products array in localstorage as "products"


let form= document.querySelector("form").addEventListener("submit", myfunc)


let arrObj=[];


function myfunc() {
  event.preventDefault()
  let type = document.querySelector("#type").value;
  let desc = document.querySelector("#desc").value;
  let price = document.querySelector("#price").value;
  let image = document.querySelector("#image").value;

    c= new PumaManager(type,desc,price,image)
    arrObj.push(c)
    localStorage.setItem("Products", JSON.stringify(arrObj))
    
  
}

function PumaManager(t,d,p,i) {
    this.type= t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

document.querySelector("#show_products").addEventListener("click",goToInventry)

  function goToInventry() {
      window.location.href="inventory.html"
  }
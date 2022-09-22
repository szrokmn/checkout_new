const taxRate = 0.18;
const shippingPrice = 20;
const shippingFreePrice = 200;

window.addEventListener("load", ()=>{
    calculateCartPrice();
    //set items to LocalStorage
    // localStorage.setItem("taxRate", taxRate);
    // localStorage.setItem("shippingPrice", shippingPrice);
    // localStorage.setItem("shippingFreePrice", shippingFreePrice);

     //set items to sessionStorage
    //  sessionStorage.setItem("taxRate", taxRate);
    //  sessionStorage.setItem("shippingPrice", shippingPrice);
    //  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});
const productsDiv = document.querySelector(".products");
//Capturing vs. Bubbling
productsDiv.addEventListener("click", (event)=>{
    if(event.target.className == "fa-solid fa-minus"){
        //console.log("minus btn is clicked!");
        if(event.target.parentElement.querySelector(".quantity").innerText > 1){
            event.target.parentElement.querySelector(".quantity").innerText--;
            calculateProductPrice(event.target);
            calculateCartPrice();
        }
        else{
            if(confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be deleted!!!`)){
                //remove
                event.target.parentElement.parentElement.parentElement.remove();
                calculateCartPrice();
            }
        }
    }
    else if(event.target.classList.contains("fa-plus")){
        //console.log("plus btn is clicked!");
        event.target.previousElementSibling.innerText++;
        calculateProductPrice(event.target);
        calculateCartPrice();
    }
    else if(event.target.className == "remove-product"){
        //console.log("remove btn is clicked!");
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
    }
    else{
        console.log("other element is clicked!");
    }
});
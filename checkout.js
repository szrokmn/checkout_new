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
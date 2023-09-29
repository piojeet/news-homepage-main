let openBtn = document.querySelector(".menu");
let cloaseBtn = document.querySelector(".close");
let navItms = document.querySelector("nav ul");

openBtn.addEventListener("click", function(){
    navItms.classList.add("active")
})

cloaseBtn.addEventListener("click", function(){
    navItms.classList.remove("active")
})
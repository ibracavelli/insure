const hamburger = document.querySelector(".hamburger");

const navlinks = document.querySelector(".mobile-d")

const close2 = document.querySelector(".close")


hamburger.addEventListener('click', ()=>{
    navlinks.classList.toggle("mobile-d2");
    hamburger.src = navlinks.classList.contains("mobile-d2")
    ? "./icon-close.svg"
    : "./icon-hamburger.svg";
});

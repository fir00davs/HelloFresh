let btnOpen = document.querySelector("#burger__menu");
let isOpen = false;
btnOpen.addEventListener("click", (event) => {
    let btn = event.target;
    isOpen = !isOpen;
    btn.innerText = isOpen ? "close" : "open"
    document.querySelector("#mobile__menu").classList.toggle("--open")
})


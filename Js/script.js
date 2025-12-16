/*movimiento about*/ 
let emptyElement = document.querySelector(".about .empty");
let titleElement = document.querySelector(".about .title");

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) { 
    emptyElement.style.flexBasis = event.clientX + "px";
    titleElement.style.flexBasis = event.clientY + "px"; 
}


/*menu*/
const btnMenu = document.querySelector("#btn_menu");
const nav = document.querySelector("#navbar");
const links = nav.querySelector('a');

btnMenu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');

    btnMenu.textContent = isOpen ? 'Close':'Menu';
    btnMenu.setAttribute('aria-expanded', isOpen)
});



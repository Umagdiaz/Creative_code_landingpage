let emptyElement = document.querySelector(".about .empty");
let titleElement = document.querySelector(".about .title");

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) { 
    emptyElement.style.flexBasis = event.clientX + "px";
    titleElement.style.flexBasis = event.clientY + "px"; 
}





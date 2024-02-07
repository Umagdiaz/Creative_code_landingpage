let emptyElement = document.querySelector(".about .empty");
let titleElement = document.querySelector(".about .title")
let geometryElements = document.querySelectorAll("figure");


window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) { 
    emptyElement.style.flexBasis = event.clientX + "px";
    titleElement.style.flexBasis = event.clientY/2 + "px"; 

    geometryElements.forEach( function( element ) { 
        element.style.flexBasis = (window.innerWidth - event.clientX + "px");  
    });


}

/* nav ul {
    height: 50px;
    display: flex;
    justify-content:space-around; 
    list-style-type: none; 
    padding: 0;
    margin-top: 10px;} */




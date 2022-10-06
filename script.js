
if (window.screen.width >= 780) {

    const scrollContainer = document.querySelector("main");
        scrollContainer.addEventListener("wheel", (event) => {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaY;
        });
    }
    
    

let curseur = document.getElementById("cursor");
document.addEventListener("mousemove", function(Souris){
	let x = Souris.clientX;
	let y = Souris.clientY;
	curseur.style.left = x + "px";
	curseur.style.top = y + "px";
})

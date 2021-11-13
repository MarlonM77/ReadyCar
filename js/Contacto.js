/**Botón Menu responsive**/


document.getElementById("icon-menu2").addEventListener("click" , showMenu);

buttonShow = document.getElementById("icon-menu2");

showMenuL = document.getElementById("show-menu2");

let abierto = false;    

function showMenu(){
    showMenuL.classList.toggle("menu3");
    if (document.querySelector(".menu.menu3")){
    abierto = true;
    showMenuL.style.transform = "translateX(0%)";
    showMenuL.style.transition = "transform .5s ease-in-out";
}else{
    showMenuL.style.transform = "translateX(-100%)";
    abierto = false
 }
}

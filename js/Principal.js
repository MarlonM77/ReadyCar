
var openPopL = document.getElementById('openPopL'),
loganD = document.getElementById('loganD'),
closePopL = document.getElementById('closePopL');

openPopL.addEventListener('click', function() {
loganD.classList.add('active');
});

closePopL.addEventListener('click', function() {
loganD.classList.remove('active');
});

var openPopNV = document.getElementById('openPopNV'),
nissanVD = document.getElementById('nissanVD'),
closePopNV = document.getElementById('closePopNV');

openPopNV.addEventListener('click', function() {
nissanVD.classList.add('active');
});

closePopNV.addEventListener('click', function() {
nissanVD.classList.remove('active');
});

var openPopNM = document.getElementById('openPopNM'),
nissanMD = document.getElementById('nissanMD'),

closePopNM = document.getElementById('closePopNM');

openPopNM.addEventListener('click', function() {
nissanMD.classList.add('active');
});

closePopNM.addEventListener('click', function() {
nissanMD.classList.remove('active');
});

var openPopCT = document.getElementById('openPopCT'),
chevroletTD = document.getElementById('chevroletTD'),
closePopCT = document.getElementById('closePopCT');

openPopCT.addEventListener('click', function() {
chevroletTD.classList.add('active');
});

closePopCT.addEventListener('click', function() {
chevroletTD.classList.remove('active');
});

var openPopHSF = document.getElementById('openPopHSF'),
hyundaiSFD = document.getElementById('hyundaiSFD'),
closePopHSF = document.getElementById('closePopHSF');

openPopHSF.addEventListener('click', function() {
hyundaiSFD.classList.add('active');
});

closePopHSF.addEventListener('click', function() {
hyundaiSFD.classList.remove('active');
});

var openPopKC = document.getElementById('openPopKC'),
kiaCD = document.getElementById('kiaCD'),
closePopKC = document.getElementById('closePopKC');

openPopKC.addEventListener('click', function() {
kiaCD.classList.add('active');
});

closePopKC.addEventListener('click', function() {
kiaCD.classList.remove('active');
});

var openPopKP = document.getElementById('openPopKP'),
kiaPD = document.getElementById('kiaPD'),
closePopKP = document.getElementById('closePopKP');

openPopKP.addEventListener('click', function() {
kiaPD.classList.add('active');
});

closePopKP.addEventListener('click', function() {
kiaPD.classList.remove('active');
});


const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".sliderSection");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnL = document.querySelector("#btnL");
const btnR = document.querySelector("#btnR");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".sliderSection")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 500);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".sliderSection");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 500);
}

btnR.addEventListener('click', function() {
    Next();
});

btnL.addEventListener('click', function() {
    Prev();
});

setInterval(function() {
    Next();
}, 6000);


//**Boton arriba**//

document.getElementById("button-up").addEventListener("click" , scrollUp)

function scrollUp(){
    var currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 0){
        window.scrollTo (0,0);
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if(scroll > 700){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll <  700){
        buttonUp.style.transform = "scale(0)";
    }
}


/**Botón Menu responsive**/


document.getElementById("icon-menu").addEventListener("click" , showMenu);

buttonShow = document.getElementById("icon-menu");

showMenuL = document.getElementById("show-menu");

let abierto = false;    

function showMenu(){
    showMenuL.classList.toggle("menu2");
    if (document.querySelector(".menuR.menu2")){
    abierto = true;
    showMenuL.style.transform = "translateX(0%)";
    showMenuL.style.transition = "transform .5s ease-in-out";
}else{
    showMenuL.style.transform = "translateX(-100%)";
    abierto = false
 }
}

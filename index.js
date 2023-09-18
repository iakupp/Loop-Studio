const mobileBg = document.querySelector(".header");
const navigationSwitch = document.querySelector(".menuIcon");
const navigationMenu = document.querySelector(".mobileNavigation");
const mobileNavIcon = document.querySelector(".mobileNavIcon");
const headText = document.querySelector(".headText");

const box = document.querySelectorAll("boxes")
const galleryImage = document.querySelectorAll(".image");
const headingText = document.querySelectorAll(".heading");

let isShowed = false;


navigationSwitch.addEventListener("click", toggleDifBg)
function toggleDifBg(){
    isShowed = !isShowed;
    if(isShowed){
        mobileBg.classList.add("addMobileBg");
        mobileNavIcon.src = "./images/icon-close.svg";
        headText.style.display = "none";
        navigationMenu.style.display = "block";
    }else{
        mobileBg.classList.remove("addMobileBg");
        mobileNavIcon.src = "/images/icon-hamburger.svg";
        headText.style.display = "block";
        navigationMenu.style.display = "none";
    }
}

for (let i = 0; i < galleryImage.length; i++) {
    galleryImage[i].addEventListener("click", function() {
        galleryImage[i].classList.toggle("activeImg");
        headingText[i].classList.toggle("activeH2");
    });
}

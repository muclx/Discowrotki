const infoNav = document.querySelector(".info-nav")
const mainNav = document.querySelector(".main-nav")
const navItems = document.querySelector(".nav-items")
const links = document.querySelector(".links")
const burgerIcon = document.querySelector(".fa-bars")
const xIcon = document.querySelector(".fa-xmark")
const burgerBox = document.querySelector(".burger-icon")
const navElements = document.querySelectorAll(".links>a")
const video = document.querySelector("video")
const loaderVideo = document.querySelector(".video-container>.loader")


// console.log(video);
const hideInfo = () => {
    if (window.scrollY < 10) {
        infoNav.classList.add("transition")
        infoNav.style.transform = "translateY(0)";
        mainNav.classList.add("transition")
        mainNav.style.transform = "translateY(0)";
        mainNav.style.background = "transparent";
    }
    else if (window.scrollY > 24) {
        infoNav.classList.add("transition")
        infoNav.style.transform = "translateY(-3.5rem)";
        mainNav.classList.add("transition")
        mainNav.style.transform = "translateY(-3.5rem)";
        mainNav.style.background = "#000";
    }
}

const toggleNav = () => {
    burgerIcon.classList.toggle("hide")
    xIcon.classList.toggle("hide")
    links.classList.toggle("show-nav")
    links.classList.toggle("hide-nav")

}

video.addEventListener("load", function () {
    video.style.opacity = 1;
    loaderVideo.classList.add("hide");
    console.log(video);

})
if (video.complete) {
    video.style.opacity = 1;
    loaderVideo.classList.add("hide");
}
window.addEventListener("scroll", hideInfo)
burgerBox.addEventListener('click', toggleNav)
document.addEventListener('click', e => {
    if (links.classList.contains("show-nav") && e.target !== navElements && e.target !== burgerBox && e.target !== xIcon && e.target !== burgerIcon) {
        toggleNav();
    }
})
navElements.forEach(element => {
    element.addEventListener("click", toggleNav)
})
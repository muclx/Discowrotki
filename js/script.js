const infoNav = document.querySelector(".info-nav")
const mainNav = document.querySelector(".main-nav")
const navItems = document.querySelector(".nav-items")
const links = document.querySelector(".links")
const burgerIcon = document.querySelector(".fa-bars")
const xIcon = document.querySelector(".fa-xmark")
const burgerBox = document.querySelector(".burger-icon")
const navElements = document.querySelectorAll(".links>a")
const expandBtn = document.querySelector(".expand-btn")
const galeryBox = document.querySelector(".galery-box")
const galeryBoxes = document.querySelectorAll(".galery-img")
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

const expandGalery = () => {
    // const currentHeightPx = parseFloat(getComputedStyle(galeryBox).height);

    // // Przekształć obecną wysokość na rem
    // const currentHeightRem = currentHeightPx / parseFloat(getComputedStyle(document.documentElement).fontSize);

    // // Dodaj 93rem
    // galeryBox.style.height = currentHeightRem + 93 + 'rem';
    galeryBox.style.height = "100%"
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
expandBtn.addEventListener("click", expandGalery)
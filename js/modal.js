const expandBtn = document.querySelector(".expand-btn")
const galeryBox = document.querySelector(".galery-box")
const galeryBoxes = document.querySelectorAll(".galery-img")
const bodyModal = document.querySelector("body")
const modal = document.querySelector(".modal")
const images = document.querySelectorAll(".galery-box>.galery-img> img")
let modalImage = document.querySelector(".modal-img>img")
const closeIcon = document.querySelector(".close-icon")
const downloadIcon = document.querySelector(".download-icon")
const arrowLeft = document.querySelector(".fa-chevron-left")
const arrowRight = document.querySelector(".fa-chevron-right")
let currentImageIndex = 0;



const expandGalery = () => {
    galeryBox.style.height = "100%"
    expandBtn.style.display = "none"
}


const hideModal = () => {
    modal.style.display = "none"
    bodyModal.classList.remove("modal-box")
}

const downloadImages = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = modalImage.src;
    downloadLink.download = modalImage.src;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        hideModal();
    }
});

images.forEach(img => {
    img.addEventListener('click', function (e) {
        modalImage.src = e.currentTarget.src;
        modal.style.display = "flex"
        bodyModal.classList.add("modal-box")
    })
})

const findIndex = () => {
    for (let i = 0; i < images.length; i++) {

        if (modalImage.src === images[i].src) {
            return i;
            break;
        }
    }
}

function showNextImage() {
    currentImageIndex = findIndex()

    modalImage.src = images[currentImageIndex + 1].src

    if (images[currentImageIndex] === images[images.length - 2]) {
        arrowRight.style.display = "none"
    }
    else {
        arrowLeft.style.display = "block"

    }
}

function showPreviousImage() {
    currentImageIndex = findIndex()

    modalImage.src = images[currentImageIndex - 1].src

    if (images[currentImageIndex] === images[1]) {
        arrowLeft.style.display = "none"
    }
    else {
        arrowRight.style.display = "block"
    }
}
closeIcon.addEventListener("click", hideModal)
expandBtn.addEventListener("click", expandGalery)
downloadIcon.addEventListener("click", downloadImages)
arrowRight.addEventListener('click', showNextImage)
arrowLeft.addEventListener('click', showPreviousImage)

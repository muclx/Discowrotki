const video = document.querySelector("video")
const loaderVideo = document.querySelector(".video-container>.loader")

video.addEventListener("loadeddata", function () {
    video.style.opacity = 1
    loaderVideo.classList.add("hide")
})
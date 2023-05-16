var musicVideo = document.getElementById("music-video");

function animateVideo() {
    musicVideo.style.transform = "rotate(360deg)";
    musicVideo.style.transition = "transform 2s ease-in-out";
}

// Call the animateVideo function after the page has loaded
window.onload = function () {
    animateVideo();
};


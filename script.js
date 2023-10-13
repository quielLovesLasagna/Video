"use strict";

// ---- ELEMENTS ---- //
const videoContainer = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");
// ---- END OF ELEMENTS ---- //

// ---- FUNCTIONS ---- //
// Play or pause the video
const playPause = () => {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    videoContainer.pause();
  } else {
    switchBtn.classList.remove("slide");
    videoContainer.play();
  }
};

const hidePreloader = () => preloader.classList.add("hide-preloader");
// ---- END OF  FUNCTIONS ---- //

// ---- EVENT HANDLERS ---- //
// User toggles the switch
switchBtn.addEventListener("click", playPause);

// Hide preloader when page loads
window.addEventListener("load", hidePreloader);
// ---- END OF EVENT HANDLERS ---- //

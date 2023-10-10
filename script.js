"use strict";

const videoContainer = document.querySelector(".video-container");
const switchBtn = document.querySelector(".switch-btn");
const preloader = document.querySelector(".preloader");

switchBtn.addEventListener("click", () => {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    videoContainer.pause();
  } else {
    switchBtn.classList.remove("slide");
    videoContainer.play();
  }
});

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
});

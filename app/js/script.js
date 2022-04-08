const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.toggle("noscroll");
    fadeElems.forEach((element) => {
      element.classList.add("fade-out");
      element.classList.remove("fade-in");
    });
  } else {
    header.classList.add("open");
    body.classList.toggle("noscroll");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

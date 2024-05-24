const title = document.querySelector("div.hello:first-child h1");
const html = document.querySelector("html");
const body = document.querySelector("body");

function handleTitleClick(){
  title.style.color = "blue";
}
title.addEventListener("click", handleTitleClick);

function handleMouseEnter(){
  title.style.color = "red";
  title.innerText = "The mouse is here!"
}
title.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave(){
  title.style.color = "green";
  title.innerText = "The mouse is gond!"
}
title.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize(){
  title.style.color = "pink";
  title.innerText = "The just resized!"
  const width = window.innerWidth;
  console.log(width);
  if (width < 640) {
    body.style.backgroundColor="#be185d";
  } else if (width < 960) {
    body.style.backgroundColor="#c026d3";
  } else if (width < 1280) {
    body.style.backgroundColor="#7c3aed";
  } else if (width < 1600) {
    body.style.backgroundColor="#0369a1";
  } else if (width < 1920) {
    body.style.backgroundColor="#15803d";
  }
}
window.addEventListener("resize", handleWindowResize)

function handleAuxClick(){
  title.style.color = "orange";
  title.innerText = "that was a light Click!"
}
html.addEventListener("contextmenu", handleAuxClick);


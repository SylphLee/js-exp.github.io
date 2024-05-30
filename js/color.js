const body = document.querySelector("body");

function handleRandomColor() {
  let color1 = "";
  let color2 = "";
  for(let i = 0; i < 6; i++) {
    color1 += Math.floor(Math.random() * 10);
    color2 += Math.floor(Math.random() * 10);
  }
  console.log("color1 : " + color1 + ", color2 : " + color2);  
  body.style.background = `linear-gradient(to right, #${color1}, #${color2})`;
}

const randomColor = document.querySelector("#give-me-color");
randomColor.addEventListener("click", handleRandomColor);
let Main = document.querySelector(".main:first-child h1");
console.log(Main);
console.dir(Main);

function onMouse() {
  Main.textContent = "The mouse is here!";
  Main.className = "mouseOn";
}
function outMouse() {
  Main.textContent = "The mouse is gone!";
  Main.className = "mouseOff";
}
function rightClick() {
  Main.textContent = "That was a right click!";
  Main.className = "clicked";
}

function windowResize() {
  Main.textContent = "You just resized!";
  Main.className = "displayResize";
}

Main.addEventListener("mouseenter", onMouse);
Main.addEventListener("mouseleave", outMouse);
Main.addEventListener("click", rightClick);
window.addEventListener("resize", windowResize);

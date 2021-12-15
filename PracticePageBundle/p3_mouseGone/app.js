const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  mouseEnterHandler() {
    title.textContent = "The mouse is here!";
    title.style.color = colors[0];
  },
  mouseLeaveHandler() {
    title.textContent = "The mouse is gone!";
    title.style.color = colors[1];
  },
  clickHandler() {
    title.textContent = "That was a right click!";
    title.style.color = colors[2];
  },
  windowResizeHandler() {
    title.textContent = "You just resized!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseEnterHandler);
title.addEventListener("mouseleave", superEventHandler.mouseLeaveHandler);
title.addEventListener("click", superEventHandler.clickHandler);
window.addEventListener("resize", superEventHandler.windowResizeHandler);

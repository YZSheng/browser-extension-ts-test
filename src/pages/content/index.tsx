import "./style.css";

function init() {
  console.log("I'm running inside a content script");
}

document.addEventListener("DOMContentLoaded", init);

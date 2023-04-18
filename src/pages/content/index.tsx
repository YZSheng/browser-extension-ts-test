import "./style.css";
import { sum } from "./sum";

function init() {
  console.log(`I'm running inside a content script, 1 + 1 is ${sum(1, 1)}`);
  document.body.classList.add("chatgic");
  const timer = setInterval(() => {
    const h1 = document.getElementsByTagName("h1");
    if (h1.length) {
      h1[0].innerText = "ChatGIC";
      clearInterval(timer);
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", init);

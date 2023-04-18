import "./style.css";
import { sum } from "./sum";

function init() {
  console.log(`I'm running inside a content script, 1 + 1 is ${sum(1, 1)}`);
  document.body.classList.add("chatgic");
}

document.addEventListener("DOMContentLoaded", init);

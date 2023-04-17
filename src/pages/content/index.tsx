import "./style.css";
import { sum } from "./sum";

function init() {
  console.log(`I'm running inside a content script, 1 + 1 is ${sum(1, 1)}`);
}

document.addEventListener("DOMContentLoaded", init);

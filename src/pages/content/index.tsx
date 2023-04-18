import "./style.css";
import { sum } from "./sum";

function gicize() {
  const h1 = document.getElementsByTagName("h1");
  h1[0].innerText = "ChatGIC";
  const inputArea = document.querySelector("textarea");
  const sendButton = document.querySelector("textarea + button");

  const logInput = () => {
    console.log(inputArea?.value);
  };

  inputArea?.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      logInput();
    }
  });

  sendButton?.addEventListener("click", () => logInput());
}

function init() {
  console.log(`I'm running inside a content script, 1 + 1 is ${sum(1, 1)}`);
  document.body.classList.add("chatgic");
  const timer = setInterval(() => {
    const h1 = document.getElementsByTagName("h1");
    if (h1.length) {
      gicize();
      clearInterval(timer);
    }
  }, 100);
}

document.addEventListener("DOMContentLoaded", init);

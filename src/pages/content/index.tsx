import "./style.css";
import { sum } from "./sum";

const logInput = () => {
  const inputArea = document.querySelector("textarea");
  console.log("Logging input...", inputArea?.value);
};

const listenOnKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    logInput();
  }
};

const listenOnEnter = () => {
  logInput();
};

const gicize = () => {
  document.body.classList.add("chatgic");
  const h1 = document.getElementsByTagName("h1");
  if (h1.length) {
    h1[0].innerText = "ChatGIC";
  }
  const inputArea = document.querySelector("textarea");
  const sendButton = document.querySelector("textarea + button");

  inputArea?.addEventListener("keydown", listenOnKeydown);

  sendButton?.addEventListener("click", listenOnEnter);
};

const unGicize = () => {
  document.body.classList.remove("chatgic");
  const h1 = document.getElementsByTagName("h1");
  if (h1.length) {
    h1[0].innerText = "Chat GPT";
  }
  const inputArea = document.querySelector("textarea");
  const sendButton = document.querySelector("textarea + button");

  inputArea?.removeEventListener("keydown", listenOnKeydown);

  sendButton?.removeEventListener("click", listenOnEnter);
};

function init() {
  console.log(`I'm running inside a content script, 1 + 1 is ${sum(1, 1)}`);
  chrome.runtime.onMessage.addListener((request, sender) => {
    console.log("sender", sender);
    console.log("request", request);
    if (request.chatGICStatus) {
      gicize();
    } else if (request.chatGICStatus === false) {
      unGicize();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);

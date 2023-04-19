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

export const gicize = () => {
  document.body.classList.add("chatgic");
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.innerHTML = "ChatGIC";
  }
  const inputArea = document.querySelector("textarea");
  const sendButton = document.querySelector("textarea + button");

  inputArea?.addEventListener("keydown", listenOnKeydown);

  sendButton?.addEventListener("click", listenOnEnter);
};

export const unGicize = () => {
  document.body.classList.remove("chatgic");
  const h1 = document.querySelector("h1");
  if (h1) {
    h1.innerHTML = "ChatGPT";
  }
  const inputArea = document.querySelector("textarea");
  const sendButton = document.querySelector("textarea + button");

  inputArea?.removeEventListener("keydown", listenOnKeydown);

  sendButton?.removeEventListener("click", listenOnEnter);
};

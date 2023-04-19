import { gicize, unGicize } from "./gicize";
import "./style.css";
import { sum } from "./sum";

const getInitialStatusFromStorage = async () => {
  const currentStatus = await chrome.storage.local.get(["chatGICStatus"]);
  return currentStatus.chatGICStatus;
};

const startListening = () => {
  chrome.runtime.onMessage.addListener(async (request) => {
    if (request.chatGICStatus) {
      gicize();
    } else if (request.chatGICStatus === false) {
      unGicize();
    }
  });
};

async function init() {
  console.log(`I'm running inside a content script, 1 + 1 is ${sum(1, 1)}`);
  startListening();
  const status = await getInitialStatusFromStorage();
  if (status) {
    gicize();
  }
}

document.addEventListener("DOMContentLoaded", init);

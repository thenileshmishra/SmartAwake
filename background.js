let currentMode = null;

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "keepAwake") {
    if (currentMode) chrome.power.releaseKeepAwake();
    chrome.power.requestKeepAwake(msg.mode);
    currentMode = msg.mode;
    sendResponse({ status: "awake", mode: msg.mode });
  }

  if (msg.action === "releaseAwake") {
    chrome.power.releaseKeepAwake();
    currentMode = null;
    sendResponse({ status: "released" });
  }
});

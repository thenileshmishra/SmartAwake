let isActive = false;
let currentMode = "display"; // Default mode

// Set initial icon
chrome.action.setIcon({ path: "icons/icon128.png" });

// Listen for icon clicks
chrome.action.onClicked.addListener((tab) => {
  if (!isActive) {
    // Activate
    chrome.power.requestKeepAwake(currentMode);
    chrome.action.setIcon({ path: "icons/icon128_active.png" });
    isActive = true;
  } else {
    // Deactivate
    chrome.power.releaseKeepAwake();
    chrome.action.setIcon({ path: "icons/icon128.png" });
    isActive = false;
  }
});

// Listen for mode changes from options page
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "changeMode") {
    currentMode = msg.mode;
    if (isActive) {
      chrome.power.releaseKeepAwake();
      chrome.power.requestKeepAwake(currentMode);
    }
    sendResponse({ status: "modeChanged", mode: currentMode });
  }
});

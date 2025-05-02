document.getElementById("display").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "keepAwake", mode: "display" });
});

document.getElementById("system").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "keepAwake", mode: "system" });
});

document.getElementById("release").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "releaseAwake" });
});

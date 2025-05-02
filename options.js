// Load saved mode
chrome.storage.sync.get(['mode'], function(result) {
  if (result.mode) {
    document.getElementById('mode').value = result.mode;
  }
});

// Save mode when changed
document.getElementById('mode').addEventListener('change', function() {
  const mode = this.value;
  chrome.storage.sync.set({ mode: mode });
  chrome.runtime.sendMessage({ action: "changeMode", mode: mode });
}); 
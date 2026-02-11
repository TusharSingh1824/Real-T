document.addEventListener("mouseup", () => {
  const selected = window.getSelection().toString().trim();
  if (selected.length > 0) {
    chrome.storage.local.set({ selectedText: selected });
  }
});

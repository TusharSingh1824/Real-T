chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "detectFakeReview",
    title: "Check Fake/Real Review",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "detectFakeReview") {
    chrome.storage.local.set({ selectedText: info.selectionText });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        chrome.runtime.sendMessage({ action: "openPopup" });
      }
    });
  }
});

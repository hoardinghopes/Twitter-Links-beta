function openSearch(tab) {
  chrome.windows.getCurrent(function (currentWindow) {
    TwitterLinksPopup = window.open(
      "http://twitter.com/search?q=" + tab.url.split("?")[0] + "&TwitterLinks",
      "TwitterLinks-" + tab.id,
      "top=" +
        (currentWindow.top + (currentWindow.height - tab.height)) +
        ", left=" +
        (currentWindow.left + tab.width - 600) +
        ", width=600, height=" +
        tab.height
    );
  });
}

chrome.contextMenus.create({
  id: "twitter-links-to-page",
  title: "Twitter links to this page\u2026",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  openSearch(tab);
});

chrome.browserAction.onClicked.addListener(function (tab) {
  openSearch(tab);
});

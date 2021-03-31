function openSearch(tab) {
  browser.windows.getCurrent().then((currentWindow) => {
    let createData = {
      url:
        "http://twitter.com/search?q=" +
        tab.url.split("?")[0] +
        "&TwitterLinks",
      type: "popup",
      height: tab.height,
      width: 600,
      top: currentWindow.top + currentWindow.height - tab.height,
      left: currentWindow.left + tab.width - 600,
      titlePreface: "Twitter links to this page: ",
    };
    browser.windows.create(createData);
  });
}

browser.contextMenus.create({
  id: "twitter-links-to-page",
  title: "Twitter links to this page\u2026",
  contexts: ["all"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  openSearch(tab);
});

browser.browserAction.onClicked.addListener(function (tab) {
  openSearch(tab);
});

// inject script into matches page
const matcher = new RegExp("^https://app.loopcv.pro/loops/.*/matches.*$");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.url && changeInfo.url.match(matcher)) {
    console.log("injecting script");
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["inject-button.js"],
    });
  }
});

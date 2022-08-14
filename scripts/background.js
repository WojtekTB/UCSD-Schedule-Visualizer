chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
        file: "scripts/timetable.js"
    });
    chrome.tabs.executeScript({
        file: "scripts/browser_action.js"
    });
});


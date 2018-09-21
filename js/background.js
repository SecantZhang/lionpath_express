var msg = chrome.runtime.onMessage.addListener(function (message,sender,sendResponse) {
    if (message.source == "ch") {
        if (message.validation == true)
            alert("Units Calculated Successfully.");
        else
            alert("Units Calculated Unsuccessfully.");
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {file: "js/sb_content_script.js"});
});
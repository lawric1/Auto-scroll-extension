// Inject script and css when page is loaded
chrome.tabs.onUpdated.addListener(function (changeInfo, tab) {
	if (changeInfo.status == "complete") {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ["insert.js"],
		});

		chrome.scripting.insertCSS({
			target: { tabId: tab.id },
			files: ["insert.css"],
		});
	}
});

var enable = false;

// Switch visibility when icon is clicked
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ["switch.js"],
	});
});

// Reloads extension when switching pages for quick debug.
chrome.tabs.onActivated.addListener((tab) => {
	chrome.runtime.reload();
});

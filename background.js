chrome.browserAction.onClicked.addListener(function(activeTab) {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	var url = tabs[0].url;
		if (url == 'https://apps.runescape.com/runemetrics/app/pvm-kills') {
            chrome.tabs.executeScript(null, {file: "logger.js"});
		}
	})
});
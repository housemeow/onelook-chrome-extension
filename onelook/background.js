var id = chrome.contextMenus.create({
	title: onelook.getLabelText(),
	contexts: ["selection"],
	onclick: function(info, tab) {
		chrome.tabs.create({
			url: onelook.getUrl(),
			index: tab.index + 1
		});
	}
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(sender.tab) { // is send from content script
		onelook.setText(request.selection);
		chrome.contextMenus.update(id, {
			title: onelook.getLabelText()
		});
	}
});
